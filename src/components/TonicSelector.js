import Notes from "../Notes";
import PropTypes from "prop-types";

const TonicSelector = ({tonicIndex, setTonicIndex, getNoteName}) => (
    <select id="tonic" value={tonicIndex} onChange={e => setTonicIndex(parseInt(e.target.value, 10))}>
        {
            Notes.map((note, i) => (
                <option key={note.name} value={i}>{getNoteName(note)}</option>
            ))
        }
    </select>
)
TonicSelector.propTypes = {
    tonicIndex: PropTypes.number.isRequired,
    setTonicIndex: PropTypes.func.isRequired,
    getNoteName: PropTypes.func.isRequired
}
export default TonicSelector
