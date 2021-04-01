import {instrumentSettings} from "../settings";
import PropTypes from "prop-types";

const InstrumentSelector = ({currentInstrument, setCurrentInstrument}) => (
    <select id="instrument" value={currentInstrument} onChange={e => setCurrentInstrument(e.target.value)}>
        {
            Object.entries(instrumentSettings).map(([instrument, _]) => (
                <option key={instrument} value={instrument}>
                    {instrument.charAt(0).toUpperCase() + instrument.slice(1)}
                </option>
            ))
        }
    </select>
)
InstrumentSelector.propTypes = {
    currentInstrument: PropTypes.string.isRequired,
    setCurrentInstrument: PropTypes.func.isRequired
}
export default InstrumentSelector
