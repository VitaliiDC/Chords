import {SET_NOTES_BUTTONS, TOGGLE_NOTE_BUTTON, SET_TONALITIES, SET_TONALITIES_TO_VIEW} from './main.types';
import {TONAILITY_STEPS, NOTES} from '../../configs';


const initialState = {
    notes: NOTES,
    notesButtons: [],
    tonalities: [],
    tonalitiesToView: []
}

export const mainReducer = (state = initialState, action = {}) => {
    switch(action.type){
        case SET_NOTES_BUTTONS: {
            return {
                ...state,
                notesButtons: state.notes.map(e => {
                    return {
                        name: e,
                        toggled: false
                    }
                })
            }
        }
        case TOGGLE_NOTE_BUTTON:
            return {
                ...state,
                notesButtons: state.notesButtons.map(e => {
                    if(e.name === action.value) {
                        return {name: e.name, toggled: !e.toggled}
                    }
                    return e
                })
            }
        case SET_TONALITIES:
            return {
                ...state,
                tonalities: state.notes.map(e => {
                    let arr = [];
                    let advNotes = [...state.notes, ...state.notes];
                    let index = advNotes.indexOf(e);
                    for(let i = 0; i < 7; i++){
                        arr.push(advNotes[index]);
                        index += TONAILITY_STEPS[i]; 
                    }

                    return arr;
                })
            }
        case SET_TONALITIES_TO_VIEW:
            return {
                ...state,
                tonalitiesToView: state.tonalities.filter(e => {
                    let toggledNotes = [];
                    toggledNotes = state.notesButtons.filter(a => a.toggled);

                    for(let i of toggledNotes){
                        if(!e.includes(i.name)) return false
                    }

                    return true
                })
            }
        default:
            return state;
    }
}