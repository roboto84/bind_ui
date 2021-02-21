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

const get_time = () => {
    const currentTime = new Date();
    const cDate = currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate();
    const cTime = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
    return cDate + ' ' + cTime
}

const replace_quotes = (json_string) => {
    return JSON.parse(json_string.replace(/[']/g, "\""))
}

const fill_table = (table_type, messages) => {
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
            if (typeof json_message[column_header] == 'object'){
                table_row_td.innerText = json_message[column_header].value
            }
            else{
                table_row_td.innerText = json_message[column_header]
            }
            table_row_tr.appendChild(table_row_td)
            table.appendChild(table_row_tr)
        });
    });
}

const fill_current_weather = (latest_message) => {
    document.getElementById('current_temperature').innerText = latest_message.weather['temperature'].value.concat(' ',
        latest_message.weather['temperature'].unit);
    document.getElementById('apparent_temp').innerText = '... feels like '.concat(
        latest_message.weather['temperatureApparent'].value, ' ', latest_message.weather['temperatureApparent'].unit);
    document.getElementById('weather_code').innerText = latest_message.weather['weatherCode'];
    document.getElementById('moon_phase').innerText = latest_message.moon_phase;
    document.getElementById('precipitation').innerText = latest_message.weather['precipitationProbability']
        .value.concat(' ', latest_message.weather['precipitationProbability'].unit, ' Chance of ',
            latest_message.weather['precipitationType']);
    document.getElementById('humidity').innerText = latest_message.weather['humidity'].value
        .concat(' ', latest_message.weather['humidity'].unit, ' Humidity');
    document.getElementById('dew_point').innerText = latest_message.weather['dewPoint'].value
        .concat(' ', latest_message.weather['dewPoint'].unit, ' Dew Point');
    document.getElementById('epa_index').innerText = latest_message.pollution['epaIndex'].value
        .concat(' ', latest_message.pollution['epaIndex'].unit, ' (', latest_message.pollution['epaHealthConcern'], ')');
    document.getElementById('pressure').innerText = latest_message.weather['pressureSurfaceLevel'].value
        .concat(' ', latest_message.weather['pressureSurfaceLevel'].unit, ' Pressure');
    document.getElementById('pollen_index').innerText = 'n/a'.concat(' Pollen Scale');
}

const fill_weather_forecast = (weather_forecast_messages) => {
    const forecast_container = document.getElementById('forecast');
    forecast_container.innerText = '';
    console.log(weather_forecast_messages)
    weather_forecast_messages.weather.forEach((element, index) => {
        const json_message = replace_quotes(element.message)
        const forecast = document.createElement('div');
        forecast.classList.add('weather_subcategory')

        const forecast_title = document.createElement('div');
        let date_string_addition = '';
        if (index === 0){
            date_string_addition = '| today'
        }
        else if (index === 1){
            date_string_addition = '| tomorrow'
        }
        forecast_title.innerText = json_message.date.substr(5,5).concat(' ', date_string_addition)
        forecast_title.classList.add('weather_title')

        const forecast_temperature = document.createElement('div');
        forecast_temperature.innerText = json_message.temperature.value.concat(' ', json_message.temperature.unit)
        forecast_temperature.classList.add('weather_forecast_temperature')

        const forecast_temperature_apparent = document.createElement('div');
        forecast_temperature_apparent.innerText = 'feels like '.concat(json_message.temperatureApparent.value, ' ',
            json_message.temperatureApparent.unit)
        forecast_temperature_apparent.classList.add('weather_forecast_temperature_apparent')

        const forecast_summary = document.createElement('div');
        forecast_summary.innerText = json_message.weatherCode
        forecast_summary.classList.add('weather_forecast_summary')

        const forecast_moon_phase = document.createElement('div');
        forecast_moon_phase.innerText = json_message.moonPhase.concat(' Moon')
        forecast_moon_phase.classList.add('weather_forecast')

        const forecast_humidity = document.createElement('div');
        forecast_humidity.innerText = json_message.humidity.value.concat(json_message.humidity.unit, ' Humidity')
        forecast_humidity.classList.add('weather_forecast')

        const forecast_pressure = document.createElement('div');
        forecast_pressure.innerText = json_message.pressureSurfaceLevel.value.concat(' ', json_message.pressureSurfaceLevel.unit)
        forecast_pressure.classList.add('weather_forecast')

        const forecast_precipitation = document.createElement('div');
        forecast_precipitation.innerText = json_message.precipitationProbability.value.concat(
            json_message.precipitationProbability.unit, ' chance of ', json_message.precipitationType)
        forecast_precipitation.classList.add('weather_forecast')

        const pollution_forecast = replace_quotes(weather_forecast_messages.pollution[index].message)
        const forecast_aqi = document.createElement('div');
        forecast_aqi.innerText = pollution_forecast.epaIndex.value.concat(' Air Quality (', pollution_forecast.epaHealthConcern, ')')
        forecast_aqi.classList.add('weather_forecast')

        const pollen_forecast = replace_quotes(weather_forecast_messages.pollen[index].message)
        const forecast_pollen = document.createElement('div');
        forecast_pollen.innerText = 'n/a Pollen'
        forecast_pollen.classList.add('weather_forecast')

        forecast.appendChild(forecast_title)
        forecast.appendChild(forecast_temperature)
        forecast.appendChild(forecast_temperature_apparent)
        forecast.appendChild(forecast_summary)
        forecast.appendChild(forecast_precipitation)
        forecast.appendChild(forecast_humidity)
        forecast.appendChild(forecast_aqi)
        forecast.appendChild(forecast_pollen)
        forecast.appendChild(forecast_moon_phase)

        forecast_container.appendChild(forecast)
    })
}

const parse_weather_subcategory = (response_container, value) => {
    return response_container.message.filter(message => message['category'] === value);
}

const parse_messages = (response_container, weather_category, pollution_category, pollen_category) => {
    return {
        'weather': parse_weather_subcategory(response_container, weather_category),
        'pollution': parse_weather_subcategory(response_container, pollution_category),
        'pollen': parse_weather_subcategory(response_container, pollen_category)
    }
}

const fill_weather_tables = (weather_messages, weather_table, pollution_table, pollen_table) => {
    fill_table(weather_table, weather_messages.weather);
    fill_table(pollution_table, weather_messages.pollution);
    fill_table(pollen_table, weather_messages.pollen);
}

const get_api_messages = () => {
    const host = 'http://127.0.0.1'
    fetch(host+':8000/air/')
        .then(response => response.json())
        .then(response_container => {
            if (response_container.message.length) {
                const weather_messages = parse_messages(response_container, 'air_weather',
                    'air_pollution', 'air_pollen');

                fill_weather_tables (weather_messages, 'weather_table',
                    'pollution_table', 'pollen_table', )

                const weather_forecast_messages = parse_messages(response_container, 'air_weather_forecast',
                    'air_pollution_forecast', 'air_pollen_forecast');
                fill_weather_tables (weather_forecast_messages, 'weather_forecast_table',
                    'pollution_forecast_table', 'pollen_forecast_table')

                fill_current_weather({
                    'weather': replace_quotes(weather_messages.weather[0].message),
                    'pollen': replace_quotes(weather_messages.pollen[0].message),
                    'pollution': replace_quotes(weather_messages.pollution[0].message),
                    'moon_phase': replace_quotes(weather_forecast_messages.weather[0].message).moonPhase
                });

                fill_weather_forecast(weather_forecast_messages);
                document.getElementById('update_time').innerText = get_time();
            }
        });
}

get_api_messages()
setInterval(get_api_messages, 20000);
