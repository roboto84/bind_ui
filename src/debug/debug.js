
const get_api_messages = () => {
    const host = 'http://127.0.0.1'
    fetch(host+':8000/')
        .then(response => response.json())
        .then(messages => {
            const currentTime = new Date();
            const cDate = currentTime.getFullYear() + '-' + (currentTime.getMonth() + 1) + '-' + currentTime.getDate();
            const cTime = currentTime.getHours() + ":" + currentTime.getMinutes() + ":" + currentTime.getSeconds();
            document.getElementById('update_time').innerText = cDate + ' ' + cTime;

            if (messages.message.length) {
                document.getElementById('message_history').textContent = '';
                document.getElementById('latest_message').textContent = '';
            }

            messages.message.forEach(function (message, index) {
                const message_history = document.getElementById('message_history');
                const latest_message = document.getElementById('latest_message');
                const element = document.createElement('div');
                const app_title = document.createElement('span');
                const app_message = document.createElement('span');

                app_title.classList.add('app_title')
                app_message.classList.add('app_message')
                element.classList.add('message_element')

                app_title.innerText = message.id.concat('/', message.category, ' (' + message.time + '): ')
                app_message.innerText = message.message
                element.appendChild(app_title)
                element.appendChild(app_message)

                if (index === messages.message.length - 1) {
                    latest_message.appendChild(element)
                } else
                    message_history.appendChild(element)
            });
        });
}

get_api_messages()
setInterval(get_api_messages, 5000);
