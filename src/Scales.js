import Notes from "./Notes";

export class Scale {
    constructor(noteIndexArray) {
        this.notes = noteIndexArray
    }

    forTonic(tonicIndex) {
        return this.notes.map(ni => (ni + tonicIndex) % Notes.length)
    }
}

const scalePositions = {
    '-None-': [],
    Acoustic: [0, 2, 4, 5, 6, 7, 9, 10],
    'Natural Minor': [0, 2, 3, 5, 7, 8, 10],
    Algerian: [0, 2, 3, 6, 7, 8, 11],
    Altered: [0, 1, 3, 4, 6, 8, 10],
    Augmented: [0, 3, 4, 7, 9, 11],
    'Bebop Dominant': [0, 2, 4, 5, 7, 9, 10, 11],
    Blues: [0, 3, 5, 6, 7, 10],
    Chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    'Double Harmonic': [0, 1, 4, 5, 7, 8, 11],
    Enigmatic: [0, 1, 4, 6, 8, 10, 11],
    Gypsy: [0, 2, 3, 6, 7, 8, 10],
    'Half Diminshed': [0, 2, 3, 5, 6, 8, 10],
    'Harmonic Major': [0, 2, 4, 5, 7, 8, 11],
    'Harmonc Minor': [0, 2, 3, 5, 7, 8, 11],
    Hirjoshi: [0, 2, 3, 7, 8],
    'Hungarian Minor': [0, 2, 3, 6, 7, 8, 11],
    Insen: [0, 1, 5, 7, 10],
    Major: [0, 2, 4, 5, 7, 9, 11],
    Istrian: [0, 1, 3, 4, 6, 7],
    Iwato: [0, 1, 10, 5, 6],
    'Major Pentatonic Scale': [0, 2, 4, 7, 9]
}
const Scales = Object.fromEntries(Object.entries(scalePositions).map(([k, v]) => [k, new Scale(v)]))
export default Scales
