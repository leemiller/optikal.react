import {Group, Layer, Text} from "react-konva";
import {CenterTextOffset, LocationOfPointAt} from "../util";
import Notes from "../Notes";
import React from "react";
import ColorWheelWedge from "./ColorWheelWedge";
import HighlightWedge from "./HighlightWedge";
import {labelDistanceFromCenter, stageCenterPoint, wedgeAngle} from "../settings";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {changeSelectedNote} from "../actions";

const ColorWheel = () => {
    const activeNote = useSelector(s => s.selectedNote)
    const useFlats = useSelector(s=>s.useFlats)
    const dispatch = useDispatch()
    const staticWedges = Notes.map((n, i) => (
        <ColorWheelWedge
            key={n.name}
            note={n}
            noteIndex={i}
            onMouseOver={evt => dispatch(changeSelectedNote(evt.target.attrs.note))}
            onMouseOut={() => dispatch(changeSelectedNote(null))}/>))
    const labels = Notes.map((note, i) => {
        const pos = LocationOfPointAt((-90 + (wedgeAngle * i)), labelDistanceFromCenter, stageCenterPoint, stageCenterPoint)

        return (
            <Text
                key={note.name}
                x={pos.x}
                y={pos.y}
                text={note.displayName(useFlats)}
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
export default ColorWheel
