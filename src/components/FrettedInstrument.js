import Notes, {NoteSequence} from "../Notes";
import {Group, Layer, Stage} from "react-konva";
import {useMemo} from "react";
import FretboardColoredNotes from "./FretboardColoredNotes";
import Fretboard from "./Fretboard";

// Precompute things like fret distances and widths, fret marker locations, and the position of each note on the fretboard
// Without doing this upfront (and memoizing it!), performance tanks when changing the active note
const instrumentData = instrumentSettings => {
    // the distance from the nut to fret n = L(1-2^frac{-n}{12}) where L is scale length
    const fretDistancesFromNut = Array.from({length: instrumentSettings.numFrets}, (_, i) => i).map(i => instrumentSettings.scaleLength * (1 - Math.pow(2, -(i + 1) / 12)))
    const fretWidths = [fretDistancesFromNut[0], ...fretDistancesFromNut.slice(1).map((d, i) => d - fretDistancesFromNut[i])]

    const [totalDistance] = fretDistancesFromNut.slice(-1)
    const fretMarkerLocations = instrumentSettings.fretMarkers.map(fm => {
        const fretDistance = fretDistancesFromNut[fm - 1]
        const fretWidth = fretWidths[fm - 1]
        return {
            markNumber: fm,
            markerStart: (fretDistance - fretWidth) + (fretWidth / 4),
            markerWidth: fretWidth / 2
        }
    })

    // precompute the position of each note on the fretboard, then store it per string
    const frettedNotesPerString = []
    const notePositionsPerString = instrumentSettings.strings.map(openNoteName => {
        return NoteSequence(openNoteName, instrumentSettings.numFrets + 1).map((n, i) => ({note: n, position: i}))
    })
    for (let string = 0; string < notePositionsPerString.length; string++) {
        const frettedNotes = notePositionsPerString[string].slice(1)
        const notesByLocation = {}
        const y = instrumentSettings.stringSectionHeight * string
        for (let n = 0; n < frettedNotes.length; n++) {
            const sn = frettedNotes[n]
            if (!notesByLocation[sn.note.name]) {
                notesByLocation[sn.note.name] = []
            }
            const fretDistance = fretDistancesFromNut[sn.position - 1]
            const fretWidth = fretWidths[sn.position - 1]
            const x = fretDistance - fretWidth + instrumentSettings.fretWireWidth / 2 + instrumentSettings.nutWidth
            notesByLocation[sn.note.name].push({
                x, y, width: fretWidth - instrumentSettings.fretWireWidth
            })
        }
        frettedNotesPerString.push(notesByLocation)
    }

    return {
        fretWidths, fretDistancesFromNut, totalDistance, frettedNotesPerString, fretMarkerLocations
    }
}

export const FrettedInstrument = ({scaleNoteIndices, activeNote, instrumentSettings}) => {
    const data = useMemo(() => instrumentData(instrumentSettings), [instrumentSettings])
    const totalDistance = data.totalDistance
    const fretboardHeight = instrumentSettings.strings.length * instrumentSettings.stringSectionHeight

    const displayWidth = totalDistance + instrumentSettings.nutWidth + instrumentSettings.heelWidth
    const displayHeight = fretboardHeight + instrumentSettings.bindingHeight

    const notesInScale = Object.fromEntries(scaleNoteIndices.map(ni => [Notes[ni].name, true]))
    return (
        <Stage width={displayWidth} height={displayHeight}>
            <Layer>
                <Fretboard
                    fretDistancesFromNut={data.fretDistancesFromNut}
                    width={totalDistance}
                    displayWidth={displayWidth}
                    nutWidth={instrumentSettings.nutWidth}
                    fretWireWidth={instrumentSettings.fretWireWidth}
                    bindingHeight={instrumentSettings.bindingHeight}
                    boardColor={instrumentSettings.fretboardColor}
                    height={fretboardHeight}
                    fretMarkerLocations={data.fretMarkerLocations}/>
                <Group>
                    {
                        instrumentSettings.strings.map((sn, i) => (
                            <FretboardColoredNotes
                                frettedNotesPerString={data.frettedNotesPerString}
                                fretDistancesFromNut={data.fretDistancesFromNut}
                                fretWidths={data.fretWidths}
                                fretWireWidth={instrumentSettings.fretWireWidth}
                                numFrets={instrumentSettings.numFrets}
                                padding={instrumentSettings.nutWidth}
                                stringSectionHeight={instrumentSettings.stringSectionHeight}
                                key={`string-${i + 1}-${sn}`}
                                stringIndex={i}
                                activeNote={activeNote}
                                notesInScale={notesInScale}
                                openStringNoteName={sn}
                                stringWidth={displayWidth}/>
                        ))
                    }
                </Group>
            </Layer>
        </Stage>
    )
}