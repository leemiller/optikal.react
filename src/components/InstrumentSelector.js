import {instrumentSettings} from "../settings";
import {useDispatch, useSelector} from "react-redux";
import {changeInstrument} from "../actions";

const InstrumentSelector = () => {
    const currentInstrument = useSelector(s => s.instrument)
    const dispatch = useDispatch()
    return (
        <select id="instrument" value={currentInstrument} onChange={e => dispatch(changeInstrument(e.target.value))}>
            {
                Object.entries(instrumentSettings).map(([instrument, _]) => (
                    <option key={instrument} value={instrument}>
                        {instrument.charAt(0).toUpperCase() + instrument.slice(1)}
                    </option>
                ))
            }
        </select>
    );
}
export default InstrumentSelector
