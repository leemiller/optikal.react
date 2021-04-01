import {Wedge} from "react-konva";
import {Note} from "../Notes";
import React from 'react'
import PropTypes from "prop-types";
import {stageCenterPoint, wedgeAngle, wedgeRadius} from "../settings";

const ColorWheelWedge = React.forwardRef(({note, noteIndex, ...props}, ref) => {
    const startRotation = -90 - (wedgeAngle / 2)
    const rotation = startRotation + (wedgeAngle * noteIndex)
    return (
        <Wedge
            {...props}
            x={stageCenterPoint}
            y={stageCenterPoint}
            radius={wedgeRadius}
            angle={wedgeAngle}
            initialangle={wedgeAngle}
            fill={note.color}
            note={note}
            rotation={rotation}
            initialrotation={rotation}
            scale={{x: 1, y: 1}}
            opacity={1}
            ref={ref}
        />
    )
})
ColorWheelWedge.propTypes = {
    note: PropTypes.instanceOf(Note).isRequired,
    noteIndex: PropTypes.number.isRequired
}
export default ColorWheelWedge
