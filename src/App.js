import './App.css';
import {Stage} from 'react-konva'
import Notes from "./Notes";
import ScaleConstellation from "./components/ScaleConstellation";
import ColorWheel from "./components/ColorWheel";
import React, {useMemo, useState} from "react";
import Scales from "./Scales";
import {FrettedInstrument} from "./components/FrettedInstrument";
import {instrumentSettings, wheelStageSideLength} from "./settings";
import TonicSelector from "./components/TonicSelector";
import ScaleSelector from "./components/ScaleSelector";
import InstrumentSelector from "./components/InstrumentSelector";
import FlattedNameToggle from "./components/FlattedNameToggle";

function App() {
    const [tonicIndex, setTonicIndex] = useState(0)
    const [scaleName, setScaleName] = useState('Major')
    const [useFlats, setUseFlats] = useState(false)
    const [activeNote, setActiveNote] = useState(null)
    const [currentInstrument, setCurrentInstrument] = useState('guitar')

    const getNoteName = useMemo(() => note => (useFlats && note.altName) || note.name, [useFlats])
    const scale = useMemo(() => Scales[scaleName].map(ni => (ni + tonicIndex) % Notes.length), [scaleName, tonicIndex])

    return (
        <div className="App">
            <div id="option-selections">
                <TonicSelector
                    getNoteName={getNoteName}
                    setTonicIndex={setTonicIndex}
                    tonicIndex={tonicIndex}/>
                <ScaleSelector
                    setScaleName={setScaleName}
                    scaleName={scaleName}/>
                <InstrumentSelector
                    setCurrentInstrument={setCurrentInstrument}
                    currentInstrument={currentInstrument}/>
                <FlattedNameToggle
                    setUseFlats={setUseFlats}
                    useFlats={useFlats}/>
            </div>
            <Stage width={wheelStageSideLength} height={wheelStageSideLength}>
                <ColorWheel
                    getNoteName={getNoteName}
                    setActiveNote={setActiveNote}
                    activeNote={activeNote}/>
                <ScaleConstellation scaleNoteIndices={scale}/>
            </Stage>
            <FrettedInstrument
                scaleNoteIndices={scale}
                activeNote={activeNote}
                instrumentSettings={instrumentSettings[currentInstrument]}/>
        </div>
    );
}

export default App;
