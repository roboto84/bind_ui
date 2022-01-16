
const defined_word = (word) => { return `${word}`};
const part_of_speech = (part_of_speech) => { return `${part_of_speech.toLowerCase()},` };
const word_break = (word) => { return `${word}`};
const date_first_used = (word) => { return `${word}`};
const etymology = (word) => { return `◦ etymology: ${word}`};
const pronunciation = (ox_pronounce, mer_pronounce) => { return `\\ ${ox_pronounce} \\ ${mer_pronounce} \\` };
const word_examples = (example) => { return `( e.g. ${example} )`};

const remove_definitions = () => {
    const ol = document.getElementById("definition_list");

    while(ol.firstChild){
        ol.removeChild(ol.firstChild);
    }
    return ol;
}

const main_definitions = (def_array) => {
    const ol = remove_definitions();
    def_array.forEach((definition) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(definition));
        ol.appendChild(li);
    }, ol)
}

const stems = (stem_array) => {
    let stem_concat = '';
    stem_array.forEach((item) => {
        stem_concat += `${item}, `;
    });

    return `${stem_concat}`;
}

const word_audio = (word_audio) => {
    const audio = document.getElementById('audio');
    if (word_audio !== ''){
        if (audio.classList.contains('no_display')){
            audio.classList.remove('no_display');
        }
        const source = document.getElementById('audioSource');
        source.src = word_audio;
        audio.load();
    }
    else if (word_audio === '' && !audio.classList.contains('no_display')){
        audio.classList.add('no_display');
    }
}

const click_search = (event) => {
    if (event.keyCode === 13) {
        send_search_word();
    }
}

const switch_loader = () => {
    const load_visibility = document.getElementById('loader');
    const search_visibility = document.getElementById('search_visibility');
    const word_definition_visibility = document.getElementById('word_definition');
    const word_list_container = document.getElementById('word_list');

    if (load_visibility.classList.contains('no_display')){
        load_visibility.classList.remove('no_display');
        search_visibility.classList.add('no_display');
        word_definition_visibility.classList.add('no_display');
        word_list_container.classList.add('no_display');
    }
    else{
        load_visibility.classList.add('no_display');
        search_visibility.classList.remove('no_display');
        word_definition_visibility.classList.remove('no_display');
    }
}

const set_word_def_elements = (word_def) => {
    if(word_def['definition_is_acceptable']){
        word_audio(word_def['audio'])
        set_element_inner_text('word', defined_word(word_def['word']));
        set_element_inner_text('part_of_speech', part_of_speech(word_def['part_of_speech']));
        set_element_inner_text('word_break', word_break(word_def['word_break']));
        set_element_inner_text('pronunciation', pronunciation(word_def['pronounce'], ''));
        set_element_inner_text('date_first_used', date_first_used(word_def['date_first_used']));
        set_element_inner_text('etymology', etymology(word_def['etymology']));
        set_element_inner_text('stems', stems(word_def['stems']));

        main_definitions(word_def['definitions'])
        set_element_inner_text('word_examples', word_examples(word_def['example']));
    }
    else{
        const word_not_found = `perhaps "${word_def['word']}" was misspelled, here are some suggestions...`;
        word_audio('');
        set_element_inner_text('word', defined_word('Not Found'));
        set_element_inner_text('part_of_speech', part_of_speech(word_not_found));
        set_element_inner_text('stems', stems(word_def['spelling_suggestions']));

        remove_definitions();
        set_element_inner_text('word_break', '');
        set_element_inner_text('pronunciation', '');
        set_element_inner_text('date_first_used', '');
        set_element_inner_text('etymology', '');
        set_element_inner_text('word_examples', '');
    }
}

const set_word_list_elements = (word_list) => {
    const word_list_container = document.getElementById('word_list_container');
    word_list.lexicon_words.forEach(word => {
        let new_element = set_new_element(word, 'word_list_item')
        new_element.onclick = () => {
            get_word_def(word)
        }
        word_list_container.appendChild(new_element);
    });
}

const send_search_word = () => {
    get_word_def(document.getElementById('word_search_input').value);
}

const get_word_def = (word) => {
    switch_loader()
    fetch(`http://${location.hostname}:8000/lexicon/word_search/${word.toLocaleString().toLowerCase().trim()}`)
        .then(response => response.json())
        .then(response_container => {
            console.log(response_container);
            set_word_def_elements(response_container);
            switch_loader();
        });
}

const get_word_list = () => {
    fetch(`http://${location.hostname}:8000/lexicon/words`)
        .then(response => response.json())
        .then(response_container => {
            set_word_list_elements(response_container);
        });
}