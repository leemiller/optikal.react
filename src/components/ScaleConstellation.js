import {CenterTextOffset, LocationOfPointAt} from "../util";
import {Arrow, Group, Layer, Line, Text} from "react-konva";
import {stageCenterPoint, wedgeAngle, wedgeRadius} from "../settings";
import {useMemo} from "react";
import * as PropType from "prop-types";

const MakeLines = (points) => {
    const lineProperties = pos => ({
        listening: false,
        points: [stageCenterPoint, stageCenterPoint, pos.x, pos.y],
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
    const lines = notePoints.map(p =>
        (
            <Line
                {...lineProperties(p.lineEnd)}
                key={`${p.index}-line`}
            />
        )
    )
    const arrow = (<Arrow
        {...lineProperties(firstNotePoint.lineEnd)}
        key={`${firstNotePoint.index}-arrow`}
        pointerLength={12}
        pointerWidth={8}
        radius={10}
    />)
    return [arrow, ...lines]
}

const ScaleConstellation = ({scaleNoteIndices, labelOffset = 12}) => {
    const points = useMemo(() => scaleNoteIndices.map(i => {
        const rotation = -90 + wedgeAngle * i
        return {
            index: i,
            lineEnd: LocationOfPointAt(rotation, wedgeRadius, stageCenterPoint, stageCenterPoint),
            label: LocationOfPointAt(rotation, wedgeRadius + labelOffset, stageCenterPoint, stageCenterPoint)
        }
    }), [scaleNoteIndices, labelOffset])
    const lines = MakeLines(points)
    const labels = points.map((p, i) =>
        (
            <Text
                x={p.label.x}
                y={p.label.y}
                text={i + 1}
                key={`${p.label.x},${p.label.y}-label`}
                fontSize={18}
                fill='white'
                stroke='black'
                strokeWidth={1}
                fillAfterStrokeEnabled={true}
                shadowColor='black'
                shadowBlur={4}
                ref={CenterTextOffset}
            />
        ))
    return (
        <Layer id="scale-constellation">
            <Group>{lines}</Group>
            <Group>{labels}</Group>
        </Layer>
    )
}
ScaleConstellation.propTypes = {
    scaleNoteIndices: PropType.array,
    labelOffset: PropType.number
}
export default ScaleConstellation