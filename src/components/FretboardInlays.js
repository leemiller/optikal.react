import {Rect} from "react-konva";
import PropTypes from 'prop-types'

const FretboardInlays = ({fretMarkerLocations, fretboardHeight, xOffset}) => (
    fretMarkerLocations.map(fml => {
        const inlayHeight = fretboardHeight * 2 / 3
        const markerYOffset = (fretboardHeight - inlayHeight) / 2

        return (
            <Rect
                key={`inlay-marker-${fml.markNumber}`}
                x={fml.markerStart + xOffset}
                y={markerYOffset}
                height={inlayHeight}
                width={fml.markerWidth}
                fill='black'
            />
        )
    }))
FretboardInlays.propTypes = {
    fretMarkerLocations: PropTypes.array.isRequired,
    fretboardHeight: PropTypes.number.isRequired,
    xOffset: PropTypes.number.isRequired
}
export default FretboardInlays
