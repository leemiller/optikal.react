import {Group, Rect} from "react-konva";
import * as PropType from "prop-types";

const FretboardBinding = ({height, width, xOffset, yOffset, fretMarkerLocations}) => {
    return (
        <>
            <Rect
                name="binding"
                x={xOffset}
                y={yOffset}
                width={width}
                height={height}
                fill="black"/>
            {
                fretMarkerLocations.map(fml => {
                    const markerHeight = height / 2
                    const markerY = yOffset + markerHeight / 2

                    // if the marker is for an octave fret, we want to make 2 of them instead of 1
                    if (fml.markNumber % 12 === 0) {
                        const octaveWidth = fml.markerWidth / 3
                        const secondMarkerX = fml.markerStart + 2 * octaveWidth
                        return (
                            <Group key={`binding-octave-${fml.markNumber}`}>
                                <Rect
                                    x={fml.markerStart + xOffset}
                                    y={markerY}
                                    height={markerHeight}
                                    width={octaveWidth}
                                    fill='white'
                                />
                                <Rect
                                    x={secondMarkerX + xOffset}
                                    y={markerY}
                                    height={markerHeight}
                                    width={octaveWidth}
                                    fill='white'
                                />
                            </Group>
                        )
                    }
                    return (
                        <Rect
                            key={`binding-marker-${fml.markNumber}`}
                            x={fml.markerStart + xOffset}
                            y={markerY}
                            height={markerHeight}
                            width={fml.markerWidth}
                            fill='white'
                        />
                    )
                })
            }
        </>
    )
}
FretboardBinding.propTypes = {
    height: PropType.number.isRequired,
    width: PropType.number.isRequired,
    xOffset: PropType.number.isRequired,
    yOffset: PropType.number.isRequired,
    fretMarkerLocations: PropType.array.isRequired
}
export default FretboardBinding
