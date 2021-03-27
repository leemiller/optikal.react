import './App.css';

import {Stage} from 'react-konva'

import {Notes} from "./notes";
import {ColorWheel} from "./components/ColorWheel";

const boxSideLength = 500
const centerPoint = boxSideLength / 2
const wedgeRadius = 150
const labelDistanceFromCenter = wedgeRadius + 50
const wedgeAngle = 360 / Notes.length

function App() {
    return (
        <div className="App">
            <Stage width={boxSideLength} height={boxSideLength}>
                <ColorWheel wedgeAngle={wedgeAngle} centerPoint={centerPoint} wedgeRadius={wedgeRadius}
                            labelRadius={labelDistanceFromCenter}/>
}

export default App;
