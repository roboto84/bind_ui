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

const defined_word = (word_def) => {
    return `${word_def['word']} `
}

const part_of_speech = (word_def) => {
    return `${word_def['part_of_speech'].toLowerCase()}`
}

const pronunciation = (word_def) => {
    return `\\ ${word_def['pronounce']} \\`
}

const main_definitions = (word_def) => {
    return `◦ ${word_def['definition']}`
}

const word_audio = (word_def) => {
    const audio = document.getElementById('audio');
    if (audio.classList.contains('no_display')){
        audio.classList.remove('no_display')
    }
    const source = document.getElementById('audioSource');
    source.src = word_def['audio'];
    audio.load();
}

const word_examples = (word_def) => {
    return `e.g. ${word_def['example']}`
}

const click_search = (event) => {
    if (event.keyCode === 13) {
        send_search_word()
    }
}

const send_search_word = () => {
    const host = 'http://192.168.0.169'
    const inputVal = document.getElementById("word_search_input").value;
    switch_loader()
    fetch(`${host}:8000/lexicon/word_search/${inputVal.toLocaleString().toLowerCase()}`)
        .then(response => response.json())
        .then(response_container => {
            const word_def = response_container['definition']
            console.log(word_def)
            word_audio(word_def)
            set_element_inner_text('word', defined_word(word_def))
            set_element_inner_text('part_of_speech', part_of_speech(word_def))
            set_element_inner_text('pronunciation', pronunciation(word_def))
            set_element_inner_text('main_definitions', main_definitions(word_def))
            set_element_inner_text('word_examples', word_examples(word_def))
            switch_loader()
        })
}