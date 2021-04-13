export const TONIC_CHANGED = 'tonic/changed'
export const SCALE_CHANGED = 'scale/changed'
export const FLATS_CHANGED = 'flats/changed'
export const SELECTED_NOTE_CHANGED = 'selectedNote/changed'
export const INSTRUMENT_CHANGED = 'instrument/changed'

export const changeTonic = index => (
    {
        type: TONIC_CHANGED,
        index
    }
)

export const changeScale = scale => (
    {
        type: SCALE_CHANGED,
        scale
    }
)

export const changeFlats = useFlats => (
    {
        type: FLATS_CHANGED,
        useFlats
    }
)

export const changeSelectedNote = selected => (
    {
        type: SELECTED_NOTE_CHANGED,
        selected
    }
)

export const changeInstrument = instrument => (
    {
        type: INSTRUMENT_CHANGED,
        instrument
    }
)
