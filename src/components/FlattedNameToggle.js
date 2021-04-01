import PropTypes from "prop-types";

const FlattedNameToggle = ({useFlats, setUseFlats}) => (
    <label>
        <input type="checkbox" checked={useFlats} onChange={() => setUseFlats(!useFlats)}/>
        Show Flats
    </label>
)
FlattedNameToggle.propTypes = {
    useFlats: PropTypes.bool.isRequired,
    setUseFlats: PropTypes.func.isRequired
}
export default FlattedNameToggle
