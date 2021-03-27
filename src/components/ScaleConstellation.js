import {CenterTextOffset, LocationOfPointAt} from "../util";
import {Arrow, Group, Layer, Line, Text} from "react-konva";

const MakeLines = (points, centerPoint) => {
    const attributes = (pos) => ({
        listening: false,
        points: [centerPoint, centerPoint, pos.x, pos.y],
        fill: 'white',
        stroke: 'white',
        strokeWidth: 2,
        shadowColor: 'black',
        shadowBlur: 3,
        shadowOffset: {
            x: 0,
            y: 0
        }
    })
    const [firstNotePoint, ...notePoints] = points
    const lines = notePoints.map(p => {
        return <Line
            {...attributes(p.end)}
            key={`${p.index}-line`}
        />
    })
    lines.unshift(<Arrow
        {...attributes(firstNotePoint.end)}
        key={`${firstNotePoint.index}-arrow`}
        pointerLength={12}
        pointerWidth={8}
        radius={10}
    />)
    return lines
}

export const ScaleConstellation = ({scaleNoteIndexes, wedgeAngle, radius, centerPoint, labelOffset = 12}) => {
    const startRotation = -90
    const points = scaleNoteIndexes.map(i => {
        const rotation = startRotation + wedgeAngle * i
        return {
            index: i,
            end: LocationOfPointAt(rotation, radius, centerPoint, centerPoint),
            label: LocationOfPointAt(rotation, radius + labelOffset, centerPoint, centerPoint)
        }
    })
    const lines = MakeLines(points, centerPoint)
    const labels = points.map((p, i) => {
        return (
            <Text
                x={p.label.x}
                y={p.label.y}
                text={i + 1}
                key={`${p.label.x},${p.label.y}-label`}
                fontSize={18}
                fill='white'
                shadowColor='black'
                shadowBlur={4}
                shadowOpacity={1}
                ref={CenterTextOffset}
            />
        )
    })
    return (
        <Layer id="scale-constellation">
            <Group>{lines}</Group>
            <Group>{labels}</Group>
        </Layer>
    )
}
