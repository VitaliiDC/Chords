import {SET_NOTES_BUTTONS, TOGGLE_NOTE_BUTTON, SET_TONALITIES, SET_TONALITIES_TO_VIEW} from './main.types'

const setNotesButtons = () => ({
    type: SET_NOTES_BUTTONS
});

const toggleNoteButton = (value) => ({
    type: TOGGLE_NOTE_BUTTON,
    value
});

const setTonalities = () => ({
    type: SET_TONALITIES
});

const setTonalitiesToView = () => ({
    type: SET_TONALITIES_TO_VIEW
});

export {setNotesButtons, toggleNoteButton, setTonalities, setTonalitiesToView};