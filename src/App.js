import './App.css';
import ScaleConstellation from "./components/ScaleConstellation";
import ColorWheel from "./components/ColorWheel";
import React from "react";
import {FrettedInstrument} from "./components/FrettedInstrument";
import {wheelStageSideLength} from "./settings";
import ReduxStage from "./components/ReduxStage";
import Options from "./components/Options";

function App() {
    return (
        <div className="App">
            <Options/>
            <ReduxStage stageWidth={wheelStageSideLength} stageHeight={wheelStageSideLength}>
                <ColorWheel/>
                <ScaleConstellation/>
            </ReduxStage>
            <FrettedInstrument/>
        </div>
    );
}

export default App;
