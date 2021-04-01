import Scales from "../Scales";
import PropTypes from "prop-types";

const ScaleSelector = ({scaleName, setScaleName}) => (
    <select id="scale" value={scaleName} onChange={e => setScaleName(e.target.value)}>
        {
            Object.entries(Scales).map(([scaleName, _]) => (
                <option key={scaleName} value={scaleName}>{scaleName}</option>
            ))
        }
    </select>
)
ScaleSelector.propTypes = {
    scaleName: PropTypes.string.isRequired,
    setScaleName: PropTypes.func.isRequired
}
export default ScaleSelector
