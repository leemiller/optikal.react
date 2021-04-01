import {Group, Layer, Text} from "react-konva";
import {CenterTextOffset, LocationOfPointAt} from "../util";
import Notes, {Note} from "../Notes";
import React from "react";
import ColorWheelWedge from "./ColorWheelWedge";
import HighlightWedge from "./HighlightWedge";
import {labelDistanceFromCenter, stageCenterPoint, wedgeAngle} from "../settings";
import PropTypes from "prop-types";

const ColorWheel = ({activeNote, setActiveNote, getNoteName}) => {
    const staticWedges = Notes.map((n, i) => (
        <ColorWheelWedge
            key={n.name}
            note={n}
            noteIndex={i}
            onMouseOver={evt => setActiveNote(evt.target.attrs.note)}
            onMouseOut={() => setActiveNote(null)}/>))
    const labels = Notes.map((note, i) => {
        const pos = LocationOfPointAt((-90 + (wedgeAngle * i)), labelDistanceFromCenter, stageCenterPoint, stageCenterPoint)

        return (
            <Text
                key={note.name}
                x={pos.x}
                y={pos.y}
                text={getNoteName(note)}
                id={`label-${note.name}`}
                fontSize={24}
                fill={'black'}
                ref={CenterTextOffset}/>
        )
    })
    return (
        <Layer id="color-wheel">
            <Group>{staticWedges}</Group>
            <HighlightWedge activeNote={activeNote}/>
            <Group>{labels}</Group>
        </Layer>
    )
}
ColorWheel.propTypes = {
    activeNote: PropTypes.instanceOf(Note),
    setActiveNote: PropTypes.func.isRequired,
    getNoteName: PropTypes.func.isRequired
}
export default ColorWheel
