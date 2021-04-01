import {NoteSequence} from "../Notes";
import {Rect} from "react-konva";
import FretboardHighlightNotes from "./FretboardHighlightNotes";
import ColoredString from "./ColoredString";

const FretboardColoredNotes = ({
                                   fretDistancesFromNut,
                                   fretWidths,
                                   frettedNotesPerString,
                                   openStringNoteName,
                                   stringIndex,
                                   activeNote,
                                   notesInScale,
                                   stringWidth,
                                   stringSectionHeight,
                                   numFrets,
                                   fretWireWidth,
                                   padding
                               }) => {
    const [stringNote, ...frettedNotes] = NoteSequence(openStringNoteName, numFrets + 1).map((n, i) => ({
        note: n,
        position: i
    })).filter((n, i) => notesInScale[n.note.name] || i === 0)

    const y = stringSectionHeight * stringIndex
    const fretNotes = frettedNotes.map(n => {
        const fretDistance = fretDistancesFromNut[n.position - 1]
        const thisFretWidth = fretWidths[n.position - 1]
        const x = padding + fretDistance - thisFretWidth + fretWireWidth / 2
        return (
            <Rect
                key={`fret-${stringIndex + 1}-${n.position}`}
                x={x} y={y}
                width={thisFretWidth - fretWireWidth}
                height={stringSectionHeight}
                fill={n.note.color}
                opacity={0.75}
            />
        )
    })

    return (
        <>
            {fretNotes}
            <ColoredString
                width={stringWidth}
                height={fretWireWidth}
                stringIndex={stringIndex}
                stringNote={stringNote.note}
                stringSectionHeight={stringSectionHeight}
                isInScale={notesInScale[stringNote.note.name] || false}
                isActiveNote={(activeNote && activeNote.name === stringNote.note.name) || false}/>
            <FretboardHighlightNotes
                stringHeight={stringSectionHeight}
                frettedNotesPerString={frettedNotesPerString}
                activeNote={activeNote}
                stringIndex={stringIndex}/>
        </>
    )
}
export default FretboardColoredNotes
