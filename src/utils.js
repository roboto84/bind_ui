const pad_time = (time_value) => {
    return String(time_value).padStart(2, '0');
}

const get_standard_time = (date) => {
    const date_value = (pad_time(date.getMonth() + 1)) + '/' + pad_time(date.getDate());
    const hours = pad_time(date.getHours()) + ":" + pad_time(date.getMinutes());
    const seconds = pad_time(date.getSeconds());
    return {
        'date': date_value,
        'time': hours,
        'seconds': seconds
    };
}

const set_element_inner_text = (element_id, text) => {
    const dom_element = document.getElementById(element_id);
    dom_element.innerText = text;
    return dom_element;
}

const set_new_element = (text, css_class) => {
    const element = document.createElement('div');
    element.innerText = text;
    if(css_class){
        element.classList.add(css_class);
    }
    return element;
}

const element_appender = (parent, child_data) => {
    parent.appendChild(set_new_element(...child_data));
    return parent;
}