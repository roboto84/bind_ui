
const defined_word = (word) => { return `${word}`}
const part_of_speech = (part_of_speech) => { return `${part_of_speech.toLowerCase()},` }
const word_break = (word) => { return `${word}`}
const date_first_used = (word) => { return `${word}`}
const etymology = (word) => { return `◦ etymology: ${word}`}
const pronunciation = (ox_pronounce, mer_pronounce) => { return `\\ ${ox_pronounce} \\ ${mer_pronounce} \\` }
const word_examples = (example) => { return `( e.g. ${example} )`}

const remove_definitions = () => {
    const ol = document.getElementById("definition_list");

    while(ol.firstChild){
        ol.removeChild(ol.firstChild);
    }
    return ol
}

const main_definitions = (mer_def_array, ox_def_array) => {
    const ol = remove_definitions()
    mer_def_array.forEach((definition) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(definition));
        ol.appendChild(li);
    }, ol)
    ox_def_array.forEach((definition) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(definition));
        ol.appendChild(li);
    }, ol)
}

const stems = (stem_array) => {
    let stem_concat = '';
    stem_array.forEach((item) => {
        stem_concat += `${item}, `
    });

    return `${stem_concat}`
}

const word_audio = (word_audio) => {
    const audio = document.getElementById('audio');
    if (word_audio !== ''){
        if (audio.classList.contains('no_display')){
            audio.classList.remove('no_display')
        }
        const source = document.getElementById('audioSource');
        source.src = word_audio;
        audio.load();
    }
    else if (word_audio === '' && !audio.classList.contains('no_display')){
        audio.classList.add('no_display')
    }
}

const click_search = (event) => {
    if (event.keyCode === 13) {
        send_search_word()
    }
}

const switch_loader = () => {
    const load_visibility = document.getElementById('load_visibility')
    const search_visibility = document.getElementById('search_visibility')
    const word_definition_visibility = document.getElementById('word_definition_visibility')

    if (load_visibility.classList.contains('no_display')){
        load_visibility.classList.remove('no_display')
        search_visibility.classList.add('no_display')
        word_definition_visibility.classList.add('no_display')
    }
    else{
        load_visibility.classList.add('no_display')
        search_visibility.classList.remove('no_display')
        word_definition_visibility.classList.remove('no_display')
    }
}

const set_elements = (word_def_response) => {
    const word_def = word_def_response['definition']
    if(word_def['oxford']['state'] === 'available' && word_def['merriam_webster']['state'] === 'available'){
        const oxford_word_def = word_def['oxford']
        const merriam_word_def = word_def['merriam_webster']
        word_audio(oxford_word_def['audio'])
        set_element_inner_text('word', defined_word(oxford_word_def['word']))
        set_element_inner_text('part_of_speech', part_of_speech(oxford_word_def['part_of_speech']))
        set_element_inner_text('word_break', word_break(merriam_word_def['word_break']))
        set_element_inner_text('pronunciation', pronunciation(oxford_word_def['pronounce'], merriam_word_def['pronounce']))
        set_element_inner_text('date_first_used', date_first_used(merriam_word_def['date_first_used']))
        set_element_inner_text('etymology', etymology(merriam_word_def['etymology']))
        set_element_inner_text('stems', stems(merriam_word_def['stems']))

        main_definitions(merriam_word_def['definition'], oxford_word_def['definition'])
        set_element_inner_text('word_examples', word_examples(oxford_word_def['example']))
    }
    else{
        const word_not_found = `perhaps "${word_def_response['search_word']}" was misspelled, here are some suggestions...`
        word_audio('')
        set_element_inner_text('word', defined_word('Not Found'))
        set_element_inner_text('part_of_speech', part_of_speech(word_not_found))
        set_element_inner_text('stems', stems(word_def_response['spelling_suggestions']))

        remove_definitions()
        set_element_inner_text('word_break', '')
        set_element_inner_text('pronunciation', '')
        set_element_inner_text('date_first_used', '')
        set_element_inner_text('etymology', '')
        set_element_inner_text('word_examples', '')
    }
}

const send_search_word = () => {
    const host = 'http://192.168.0.169'
    const inputVal = document.getElementById("word_search_input").value;
    switch_loader()
    fetch(`${host}:8000/lexicon/word_search/${inputVal.toLocaleString().toLowerCase()}`)
        .then(response => response.json())
        .then(response_container => {
            console.log(response_container)
            set_elements(response_container)
            switch_loader()
        })
}