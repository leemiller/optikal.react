import {Rect} from "react-konva";
import PropTypes from 'prop-types'
import {Note} from "../Notes";

const FretboardHighlightNotes = ({frettedNotesPerString, activeNote, stringIndex, stringHeight}) => {
    if (!activeNote) {
        return null
    }
    return frettedNotesPerString[stringIndex][activeNote.name].map((o, i) => (
        <Rect
            key={`active-note-${stringIndex + 1}-${i + 1}`}
            {...o}
            height={stringHeight}
            fill={activeNote.color}
            opacity={1}
        />
    ))

}
FretboardHighlightNotes.propTypes = {
    frettedNotesPerString: PropTypes.array.isRequired,
    activeNote: PropTypes.instanceOf(Note),
    stringIndex: PropTypes.number.isRequired,
    stringHeight: PropTypes.number.isRequired
}
export default FretboardHighlightNotes
