import {FLATS_CHANGED, INSTRUMENT_CHANGED, SCALE_CHANGED, SELECTED_NOTE_CHANGED, TONIC_CHANGED} from "./actions";

const initialState = {
    tonicIndex: 0,
    scaleName: 'Major',
    useFlats: false,
    selectedNote: null,
    instrument: 'guitar'
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TONIC_CHANGED:
            return {
                ...state,
                tonicIndex: action.index
            }
        case SCALE_CHANGED:
            return {
                ...state,
                scaleName: action.scale
            }
        case FLATS_CHANGED:
            return {
                ...state,
                useFlats: action.useFlats
            }
        case SELECTED_NOTE_CHANGED:
            return {
                ...state,
                selectedNote: action.selected
            }
        case INSTRUMENT_CHANGED:
            return {
                ...state,
                instrument: action.instrument
            }
        default:
            return state
    }
}