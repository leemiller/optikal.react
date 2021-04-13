import {useDispatch, useSelector} from "react-redux";
import {changeFlats} from "../actions";

const FlattedNameToggle = () => {
    const useFlats = useSelector(s => s.useFlats)
    const dispatch = useDispatch()
    return (
        <label>
            <input type="checkbox" checked={useFlats} onChange={() => dispatch(changeFlats(!useFlats))}/>
            Show Flats
        </label>
    );
}
export default FlattedNameToggle
