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

const fill_table = (table_type, weather_data) => {
    if(weather_data.length) {
        const message_keys = Object.keys(weather_data[0]);
        const table = document.getElementById(table_type);
        const table_header_tr = document.createElement('tr');
        table.innerText = '';

        message_keys.forEach(column_header => {
            const table_header_th = document.createElement('th');
            table_header_th.innerText = column_header
            table_header_tr.appendChild(table_header_th)
            table.appendChild(table_header_tr)
        });

        weather_data.forEach(element => {
            const table_row_tr = document.createElement('tr');
            const json_message = element

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

const fill_current_weather = (current_weather, moon_phase) => {
    const current_weather_view_data = [
        ['current_temperature', `${current_weather.temperature}`],
        ['apparent_temp', `... feels like ${current_weather.temperatureApparent}`],
        ['weather_code', current_weather.weatherCode],
        ['moon_phase', moon_phase],
        ['precipitation', `${current_weather.precipitationProbability} Chance of ${current_weather['precipitationType']}`],
        ['humidity', `${current_weather.humidity} Humidity`],
        ['dew_point', `${current_weather['dewPoint']} Dew Point`],
        ['epa_index', `${current_weather.epaIndex} (${current_weather.epaHealthConcern})`],
        ['pressure', `${current_weather.pressureSurfaceLevel} Pressure`],
        ['pollen_index', `Pollen ${current_weather.treeIndex}`]
    ]

    current_weather_view_data.forEach((current_weather_piece) => {
        set_element_inner_text(...current_weather_piece)
    })
}

const fill_weather_forecast = (weather_forecast) => {
    const forecast_container = document.getElementById('forecast');
    forecast_container.innerText = '';
    weather_forecast.forEach((element, index) => {
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
            [`${get_standard_time(new Date(element.date)).date}${date_string_addition}`, 'weather_title'],
            [`${element.temperature}`, 'weather_forecast_temperature'],
            [`feels like ${element.temperatureApparent}`, 'weather_forecast_temperature_apparent'],
            [`${element.weatherCode}`, 'weather_forecast_summary'],
            [`${element.precipitationProbability} chance of ${element.precipitationType}`,  default_css],
            [`${element.humidity} Humidity`, default_css],
            [`${element.pressureSurfaceLevel} Pressure`, default_css],
            [`${element.epaHealthConcern} Air Quality (${element.epaIndex})`, default_css],
            [`Pollen ${element.treeIndex}`, default_css],
            [`${element.moonPhase} Moon`, default_css]
        ]

        forecast_view_data.forEach((forecast_piece) => {
            element_appender(forecast, forecast_piece)
        })
        forecast_container.appendChild(forecast)
    })
}

const parse_weather_data = (weather_data) => {
    return {
        'summary': weather_data.map(weather_obj => {
            let summary = {
                date: weather_obj.date,
                temperature: weather_obj.temperature,
                temperatureApparent: weather_obj.temperatureApparent,
                humidity: weather_obj.humidity,
                dewPoint: weather_obj.dewPoint,
                weatherCode: weather_obj.weatherCode,
                precipitationProbability: weather_obj.precipitationProbability,
                precipitationType: weather_obj.precipitationType,
                pressureSurfaceLevel: weather_obj.pressureSurfaceLevel
            }
            if (weather_obj.moonPhase !== 'n/a'){
                summary.moonPhase = weather_obj.moonPhase
            }
            return summary
        }),
        'pollution': weather_data.map(weather_obj => { return {
            date : weather_obj.date,
            epaIndex : weather_obj.epaIndex,
            epaHealthConcern : weather_obj.epaHealthConcern,
            epaPrimaryPollutant : weather_obj.epaPrimaryPollutant,
            particulateMatter10 : weather_obj.particulateMatter10,
            particulateMatter25 : weather_obj.particulateMatter25,
            pollutantCO : weather_obj.pollutantCO,
            pollutantNO2 : weather_obj.pollutantNO2,
            pollutantO3 :  weather_obj.pollutantO3,
            pollutantSO2 : weather_obj.pollutantSO2
        }}),
        'pollen': weather_data.map(weather_obj => { return {
            date : weather_obj.date,
            grassIndex : weather_obj.grassIndex,
            treeIndex : weather_obj.treeIndex,
            weedIndex : weather_obj.weedIndex
        }})
    }
}

const fill_weather_tables = (weather_data, weather_table, pollution_table, pollen_table) => {
    fill_table(weather_table, weather_data.summary);
    fill_table(pollution_table, weather_data.pollution);
    fill_table(pollen_table, weather_data.pollen);
}

const get_api_messages = () => {
    fetch(`http://${location.hostname}:8000/air/weather_report`)
        .then(response => response.json())
        .then(response_container => {
            if (response_container.weather_forecast.length && response_container.current_weather) {
                const current_time = get_standard_time(new Date());
                const weather_forecast_messages = parse_weather_data(response_container.weather_forecast);
                fill_current_weather(response_container.current_weather, response_container.weather_forecast[1].moonPhase);
                fill_weather_forecast(response_container.weather_forecast);
                fill_weather_tables (
                    weather_forecast_messages,
                    'weather_forecast_table',
                    'pollution_forecast_table',
                    'pollen_forecast_table'
                );
                document.getElementById('sub_title').innerText = `last updated: ${current_time.date} ${current_time.time}:${current_time.seconds}`
            }
        });

    fetch(`http://${location.hostname}:8000/air/weather_history`)
        .then(response => response.json())
        .then(response_container => {
            if (response_container.weather_history.length) {
                const weather_table_rows = parse_weather_data(response_container.weather_history);
                fill_weather_tables (
                    weather_table_rows,
                    'weather_table',
                    'pollution_table',
                    'pollen_table'
                );
            }
        });
}