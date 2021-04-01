import Notes from "./Notes";

export const wheelStageSideLength = 512
export const stageCenterPoint = wheelStageSideLength / 2
export const wedgeRadius = 192
export const labelDistanceFromCenter = wedgeRadius + 50
export const wedgeAngle = 360 / Notes.length

export const instrumentSettings = {
    guitar: {
        numFrets: 22,
        strings: ['E', 'B', 'G', 'D', 'A', 'E'],
        scaleLength: 1100,
        stringSectionHeight: 25,
        bindingHeight: 20,
        nutWidth: 15,
        heelWidth: 25,
        fretWireWidth: 4,
        fretMarkers: [3, 5, 7, 9, 12, 15, 17, 19, 21],
        fretboardColor: '#f2e9cc'
    },
    bass: {
        numFrets: 20,
        strings: ['G', 'D', 'A', 'E'],
        scaleLength: 1200,
        stringSectionHeight: 40,
        bindingHeight: 20,
        nutWidth: 15,
        heelWidth: 30,
        fretWireWidth: 6,
        fretMarkers: [1, 3, 5, 7, 9, 12, 15, 17, 19],
        fretboardColor: '#f2e9cc'
    },
    uke: {
        numFrets: 17,
        strings: ['G', 'C', 'A', 'E'],
        scaleLength: 1020,
        stringSectionHeight: 30,
        bindingHeight: 20,
        heelWidth: 20,
        nutWidth: 10,
        fretWireWidth: 5,
        fretMarkers: [5, 7, 10, 12, 15],
        fretboardColor: '#f2e9cc'
    }
}