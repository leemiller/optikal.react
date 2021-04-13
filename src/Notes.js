export class Note {
    constructor(name, color, altName=null) {
        this.name = name
        this.color = color
        this.altName = altName
    }

    displayName(useFlats) {
        return (useFlats && this.altName) || this.name
    }
}
const Notes = [
    new Note('C', '#ff0000'),
    new Note('C♯', '#ff6600', 'D♭'),
    new Note('D', '#ff9400'),
    new Note('D♯', '#ffc500', 'E♭'),
    new Note('E', '#ffff00'),
    new Note('F', '#8cc700'),
    new Note('F♯', '#0fad00', 'G♭'),
    new Note('G', '#00a3c7'),
    new Note('G♯', '#0064b5', 'A♭'),
    new Note('A', '#0010a5'),
    new Note('A♯', '#6300a5', 'B♭'),
    new Note('B', '#c5007c')
]
const noteIndices = Object.fromEntries(Notes.map((n,i)=>[n.name, i]))
Notes.indexFor = name => noteIndices[name]
export default Notes

function* sequence(tonic) {
    let currentIndex = noteIndices[tonic]
    yield Notes[currentIndex]
    while (++currentIndex) {
        yield Notes[currentIndex%Notes.length]
    }
}
export const NoteSequence = (tonic, number) => {
    if (isNaN(number)) {
        throw Error(`Expected a number of elements in the note sequence, but got '${number}' instead`)
    }
    const notes = []
    let notesGenerated = 0
    for (const note of sequence(tonic)) {
        if (notesGenerated >= number) {
            break
        }
        notes.push(note)
        notesGenerated++
    }
    return notes
}
