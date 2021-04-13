import Notes from "../Notes";
import {useDispatch, useSelector} from "react-redux";
import {changeTonic} from "../actions";

const TonicSelector = () => {
    const tonicIndex = useSelector(s => s.tonicIndex)
    const useFlats = useSelector(s => s.useFlats)
    const dispatch = useDispatch()
    return (
        <select id="tonic" value={tonicIndex} onChange={e => dispatch(changeTonic(parseInt(e.target.value, 10)))}>
            {
                Notes.map((note, i) => (
                    <option key={note.name} value={i}>{note.displayName(useFlats)}</option>
                ))
            }
        </select>
    );
}
export default TonicSelector
