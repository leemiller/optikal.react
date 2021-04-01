import {Rect} from "react-konva";
import PropTypes from "prop-types";
import {Note} from "../Notes";

const ColoredString = ({isInScale, stringNote, isActiveNote, stringIndex, width, height, stringSectionHeight}) => {
    const stringFill = isInScale || isActiveNote ? stringNote.color : 'gray'
    const stringStroke = isActiveNote ? stringNote.color : 'gray'
    const stringBlur = isActiveNote ? 6 : 3

    return (
        <Rect
            key={`string-${stringIndex + 1}`}
            x={0}
            y={stringSectionHeight / 2 + stringSectionHeight * stringIndex - height / 2}
            width={width}
            height={height}
            fill={stringFill}
            stroke={stringStroke}
            strokeWidth={1}
            shadowBlur={stringBlur}
            shadowColor='black'
            shadowEnabled={true}
        />
    )
}
ColoredString.propTypes = {
    isInScale: PropTypes.bool.isRequired,
    isActiveNote: PropTypes.bool.isRequired,
    stringNote: PropTypes.instanceOf(Note).isRequired,
    stringIndex: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    stringSectionHeight: PropTypes.number.isRequired
}
export default ColoredString