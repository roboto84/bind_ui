const switch_table = () => {
    const current_tables = document.getElementById('current_weather')
    const forecast_tables = document.getElementById('forecast_weather')

    if (current_tables.classList.contains('no_display')){
        current_tables.classList.remove('no_display')
        forecast_tables.classList.add('no_display')
    }
    else{
        forecast_tables.classList.remove('no_display')
        current_tables.classList.add('no_display')
    }
}

const fill_table = (table_type, messages) => {
    if(messages.length) {
        const message_keys = Object.keys(JSON.parse(messages[0].message.replace(/[']/g, "\"")));
        const table = document.getElementById(table_type);
        const table_header_tr = document.createElement('tr');
        table.innerText = '';

        message_keys.forEach(column_header => {
            const table_header_th = document.createElement('th');
            table_header_th.innerText = column_header
            table_header_tr.appendChild(table_header_th)
            table.appendChild(table_header_tr)
        });

        messages.forEach(element => {
            const table_row_tr = document.createElement('tr');
            const json_message = replace_quotes(element.message)

            message_keys.forEach(column_header => {
                const table_row_td = document.createElement('td');
                if (typeof json_message[column_header] == 'object') {
                    table_row_td.innerText = json_message[column_header].value
                } else {
                    if (column_header === 'date') {
                        const reformatted_date = get_standard_time(new Date(Date.parse(json_message[column_header])))
                        table_row_td.innerText = reformatted_date.date.concat(' ', reformatted_date.time);
                    } else {
                        table_row_td.innerText = json_message[column_header]
                    }
                }
                table_row_tr.appendChild(table_row_td)
                table.appendChild(table_row_tr)
            });
        });
    }
}

const fill_current_weather = (latest_message) => {
    const weather = latest_message.weather
    const pollution = latest_message.pollution
    const pollen = latest_message.pollen

    const current_weather_view_data = [
        ['current_temperature', `${weather.temperature.value} ${weather.temperature.unit}`],
        ['apparent_temp', `... feels like ${weather.temperatureApparent.value} ${weather.temperatureApparent.unit}`],
        ['weather_code', weather.weatherCode],
        ['moon_phase', latest_message.moon_phase],
        ['precipitation', `${weather.precipitationProbability.value} ${weather.precipitationProbability.unit} Chance of ${weather['precipitationType']}`],
        ['humidity', `${weather.humidity.value} ${weather.humidity.unit} Humidity`],
        ['dew_point', `${weather['dewPoint'].value} ${weather['dewPoint'].unit} Dew Point`],
        ['epa_index', `${pollution.epaIndex.value} ${pollution['epaIndex'].unit} (${pollution.epaHealthConcern})`],
        ['pressure', `${weather.pressureSurfaceLevel.value} ${weather.pressureSurfaceLevel.unit} Pressure`],
        ['pollen_index', `Pollen ${pollen.treeIndex}`]
    ]

    current_weather_view_data.forEach((current_weather_piece) => {
        set_element_inner_text(...current_weather_piece)
    })
}

const fill_weather_forecast = (weather_forecast_messages) => {
    const forecast_container = document.getElementById('forecast');
    forecast_container.innerText = '';
    weather_forecast_messages.weather.forEach((element, index) => {
        const json_message = replace_quotes(element.message)
        const pollution_forecast = replace_quotes(weather_forecast_messages.pollution[index].message)
        const pollen_forecast = replace_quotes(weather_forecast_messages.pollen[index].message)

        const forecast = document.createElement('div');
        forecast.classList.add('weather_subcategory')

        let date_string_addition = '';
        switch(index) {
          case 0:
            date_string_addition = ' | yesterday'
            break;
          case 1:
            date_string_addition = ' | today'
            break;
          case 2:
            date_string_addition = ' | tomorrow'
        }

        const default_css = 'weather_forecast'
        const forecast_view_data = [
            [`${get_standard_time(new Date(json_message.date)).date}${date_string_addition}`, 'weather_title'],
            [`${json_message.temperature.value} ${json_message.temperature.unit}`, 'weather_forecast_temperature'],
            [`feels like ${json_message.temperatureApparent.value} ${json_message.temperatureApparent.unit}`, 'weather_forecast_temperature_apparent'],
            [`${json_message.weatherCode}`, 'weather_forecast_summary'],
            [`${json_message.precipitationProbability.value} ${json_message.precipitationProbability.unit} chance of ${json_message.precipitationType}`,  default_css],
            [`${json_message.humidity.value} ${json_message.humidity.unit} Humidity`, default_css],
            [`${json_message.pressureSurfaceLevel.value} ${json_message.pressureSurfaceLevel.unit} Pressure`, default_css],
            [`${pollution_forecast.epaHealthConcern} Air Quality (${pollution_forecast.epaIndex.value})`, default_css],
            [`Pollen ${pollen_forecast.treeIndex}`, default_css],
            [`${json_message.moonPhase} Moon`, default_css]
        ]

        forecast_view_data.forEach((forecast_piece) => {
            element_appender(forecast, forecast_piece)
        })
        forecast_container.appendChild(forecast)
    })
}

const parse_weather_subcategory = (response_container, category, time) => {
    if (time){
        return response_container.message.filter(message =>
            message['category'] === category && message['time'].includes(time));
    }
    else{
        return response_container.message.filter(message => message['category'] === category);
    }
}

const parse_messages = (response_container, weather_category, pollution_category, pollen_category, reverse_array,
                        time_filter) => {
    if (reverse_array){
        return {
            'weather': parse_weather_subcategory(response_container, weather_category, time_filter).reverse(),
            'pollution': parse_weather_subcategory(response_container, pollution_category, time_filter).reverse(),
            'pollen': parse_weather_subcategory(response_container, pollen_category, time_filter).reverse()
        }
    }
    else{
        return {
            'weather': parse_weather_subcategory(response_container, weather_category, time_filter),
            'pollution': parse_weather_subcategory(response_container, pollution_category, time_filter),
            'pollen': parse_weather_subcategory(response_container, pollen_category, time_filter)
        }
    }

}

const fill_weather_tables = (weather_messages, weather_table, pollution_table, pollen_table) => {
    fill_table(weather_table, weather_messages.weather);
    fill_table(pollution_table, weather_messages.pollution);
    fill_table(pollen_table, weather_messages.pollen);
}

const get_api_messages = () => {
    const host = 'http://192.168.0.169'
    fetch(host+':8000/air/')
        .then(response => response.json())
        .then(response_container => {
            if (response_container.message.length) {
                const current_time = get_standard_time(new Date());

                const weather_messages = parse_messages(
                    response_container,
                    'air_weather',
                    'air_pollution',
                    'air_pollen',
                    true
                );
                const weather_forecast_messages = parse_messages(
                    response_container,
                    'air_weather_forecast',
                    'air_pollution_forecast',
                    'air_pollen_forecast',
                    false,
                    current_time.date
                );

                fill_weather_tables (
                    weather_messages,
                    'weather_table',
                    'pollution_table',
                    'pollen_table'
                )
                fill_weather_tables (
                    weather_forecast_messages,
                    'weather_forecast_table',
                    'pollution_forecast_table',
                    'pollen_forecast_table'
                )

                fill_current_weather({
                    'weather': replace_quotes(weather_messages.weather[0].message),
                    'pollen': replace_quotes(weather_messages.pollen[0].message),
                    'pollution': replace_quotes(weather_messages.pollution[0].message),
                    'moon_phase': weather_forecast_messages.weather.length ?
                        replace_quotes(weather_forecast_messages.weather[1].message).moonPhase : 'n/a'
                });

                fill_weather_forecast(weather_forecast_messages);
                document.getElementById('update_time').innerText = `last updated: ${current_time.date} ${current_time.time}:${current_time.seconds}`
            }
        });
}