import {Group, Rect, Shape} from "react-konva";
import FretboardInlays from "./FretboardInlays";
import Frets from "./Frets";
import FretboardBinding from "./FretboardBinding";

const Fretboard = ({
                       height,
                       bindingHeight,
                       width,
                       displayWidth,
                       nutWidth,
                       fretWireWidth,
                       boardColor,
                       fretMarkerLocations,
                       fretDistancesFromNut
                   }) => {
    return (
        <Group>
            <Rect
                name="nut"
                x={0}
                y={0}
                width={nutWidth}
                height={height} fill='black'/>

            <Rect
                name="fingerboard"
                x={nutWidth}
                y={0}
                width={width}
                height={height}
                fill={boardColor}/>
            <Shape
                name="neck-heel"
                sceneFunc={(ctx, shape) => {
                    ctx.beginPath();
                    ctx.moveTo(width + nutWidth, 0);
                    ctx.bezierCurveTo(
                        displayWidth,
                        0,
                        displayWidth,
                        height,
                        width + nutWidth,
                        height
                    );
                    ctx.closePath();
                    ctx.fillStrokeShape(shape);
                }}
                fill={boardColor}/>

            <FretboardInlays
                xOffset={nutWidth}
                fretboardHeight={height}
                fretMarkerLocations={fretMarkerLocations}/>
            <Frets
                xOffset={nutWidth}
                fretDistancesFromNut={fretDistancesFromNut}
                fretWireWidth={fretWireWidth}
                fretHeight={height}/>
            <FretboardBinding
                height={bindingHeight}
                width={width}
                xOffset={nutWidth}
                yOffset={height}
                fretMarkerLocations={fretMarkerLocations}/>
        </Group>
    )
}
export default Fretboard
