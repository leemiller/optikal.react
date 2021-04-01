import Notes, {Note} from "../Notes";
import {Easings} from "konva";
import ColorWheelWedge from "./ColorWheelWedge";
import * as PropTypes from "prop-types";
import {wedgeAngle} from "../settings";

const HighlightWedge = ({activeNote}) => {
    if (activeNote === null) {
       return null
    }
    return (
        <ColorWheelWedge
            note={activeNote}
            noteIndex={Notes.indexFor(activeNote.name)}
            listening={false}
            ref={n => {
                if (n === null) {
                    return
                }
                const scale = 1.15
                const newAngle = n.attrs.initialangle * scale
                const newRotation = n.attrs.initialrotation - (newAngle / 2) + (wedgeAngle / 2)
                n.to({
                    duration: 0.5,
                    easing: Easings.ElasticEaseOut,
                    scaleX: scale,
                    scaleY: scale,
                    angle: newAngle,
                    rotation: newRotation
                })
            }}
        />
    )
}
HighlightWedge.propTypes = {
    activeNote: PropTypes.instanceOf(Note)
}
export default HighlightWedge
