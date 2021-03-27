import {Easings, Tween} from "konva";
import {Notes} from "../notes";
import {Group, Layer, Text, Wedge} from "react-konva";
import {CenterTextOffset, LocationOfPointAt} from "../util";

const MakeWedges = (wedgeAngle, wedgeRadius, centerPoint) => {
    // we want to start on the 0 of the y axis, so rotate -90 degrees from the 0 of the x axis
    // we also want it to be centered on the 0 of the y axis, so subtract half the angle of a wedge
    const startRotation = -90 - (wedgeAngle / 2);
    let tween
    const scaleUp = wedge => {
        const scale = 1.15
        const newAngle = wedgeAngle * scale
        const newRotation = wedge.attrs.startrotation - (newAngle / 2) + (wedgeAngle / 2)
        tween = new Tween({
            node: wedge,
            duration: 0.5,
            easing: Easings.ElasticEaseOut,
            scaleX: scale,
            scaleY: scale,
            angle: newAngle,
            rotation: newRotation
        })
        wedge.moveToTop()
        tween.play()
    }
    const resetPosition = wedge => {
        if (tween) {
            tween.finish()
            tween = null
        }
        wedge.to({
            scaleY: 1,
            scaleX: 1,
            angle: wedgeAngle,
            rotation: wedge.attrs.startrotation,
            duration: 0
        })
        wedge.moveToBottom()
    }
    return Notes.map((note, i) => {
        const rotation = startRotation + (wedgeAngle * i)
        return (
            <Wedge
                key={note.name}
                x={centerPoint}
                y={centerPoint}
                radius={wedgeRadius}
                angle={wedgeAngle}
                name='note-wedge'
                id={`note-${note.name}`}
                fill={note.color}
                note={note.name}
                rotation={rotation}
                startrotation={rotation}
                scale={{x: 1, y: 1}}
                startscale={1}
                onMouseOver={evt => scaleUp(evt.target)}
                onMouseOut={evt => {
                    resetPosition(evt.target)
                }}
            />
        )
    });
}

export const ColorWheel = ({wedgeAngle, wedgeRadius, labelRadius, centerPoint}) => {
    const wedges = MakeWedges(wedgeAngle, wedgeRadius, centerPoint);
    const labels = Notes.map((note, i) => {
        const pos = LocationOfPointAt((-90 + (wedgeAngle * i)), labelRadius, centerPoint, centerPoint)

        return (
            <Text key={note.name} x={pos.x} y={pos.y} text={note.name} id={`label-${note.name}`} fontSize={24}
                  fill={'black'}
                  ref={CenterTextOffset}/>
        )
    })
    return (
        <Layer id="color-wheel">
            <Group>{wedges}</Group>
            <Group>{labels}</Group>
        </Layer>
    )
}
