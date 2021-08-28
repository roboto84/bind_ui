
const get_api_messages = () => {
    const host = 'http://192.168.0.169'
    fetch(host+':8000/')
        .then(response => response.json())
        .then(messages => {
            const current_time = get_standard_time(new Date())
            document.getElementById('update_time').innerText = `last updated: ${current_time.date} ${current_time.time}:${current_time.seconds}`

            const table = document.getElementById('message_stats_table')
            const header_tr = document.createElement('tr')
            const header_num = document.createElement('th')
            const header_id = document.createElement('th')
            const header_cat = document.createElement('th')
            const header_time = document.createElement('th')

            table.innerText = ''
            header_num.innerText = '#'
            header_id.innerText = 'Id'
            header_cat.innerText = 'Category'
            header_time.innerText = 'Time'

            header_tr.appendChild(header_num)
            header_tr.appendChild(header_id)
            header_tr.appendChild(header_cat)
            header_tr.appendChild(header_time)
            table.appendChild(header_tr)

            if (messages.message.length) {
                document.getElementById('message_history').textContent = ''
                document.getElementById('latest_message').textContent = ''
            }

            messages.message.forEach(function (message, index) {
                const message_history = document.getElementById('message_history')
                const latest_message = document.getElementById('latest_message')
                const element = document.createElement('div')
                const app_title = document.createElement('span')
                const app_message = document.createElement('span')

                app_title.classList.add('app_title')
                app_message.classList.add('app_message')
                element.classList.add('message_element')

                app_title.innerText = message.id.concat('/', message.category, ' (' + message.time + '): ')
                app_message.innerText = message.message
                element.appendChild(app_title)
                element.appendChild(app_message)

                if (index === messages.message.length - 1) {
                    latest_message.appendChild(element)
                }
                else {
                    message_history.appendChild(element)
                }
                const table_row_tr = document.createElement('tr')
                const num_td = document.createElement('td')
                const id_td = document.createElement('td')
                const cat_td = document.createElement('td')
                const time_td = document.createElement('td')

                num_td.innerText = index
                id_td.innerText = message.id
                cat_td.innerText = message.category
                time_td.innerText = message.time

                table_row_tr.appendChild(num_td)
                table_row_tr.appendChild(id_td)
                table_row_tr.appendChild(cat_td)
                table_row_tr.appendChild(time_td)
                table.appendChild(table_row_tr)
            });
        });
}
