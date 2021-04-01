import {Rect} from "react-konva";
import PropTypes from "prop-types";

const Frets = ({fretDistancesFromNut, xOffset, fretWireWidth, fretHeight}) => (
    fretDistancesFromNut.map((f, i) => (
            <Rect
                name={`fret-${i + 1}`}
                key={f}
                x={xOffset + f - fretWireWidth / 2}
                y={0}
                width={fretWireWidth}
                height={fretHeight}
                fill='silver'/>
        )
    )
)
Frets.propTypes = {
    fretDistancesFromNut: PropTypes.array.isRequired,
    xOffset: PropTypes.number.isRequired,
    fretWireWidth: PropTypes.number.isRequired,
    fretHeight: PropTypes.number.isRequired
}
export default Frets
