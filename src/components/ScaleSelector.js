import Scales from "../Scales";
import {useDispatch, useSelector} from "react-redux";
import {changeScale} from "../actions";

const ScaleSelector = () => {
    const scaleName = useSelector(s => s.scaleName)
    const dispatch = useDispatch()
    return (
        <select id="scale" value={scaleName} onChange={e => dispatch(changeScale(e.target.value))}>
            {
                Object.entries(Scales).map(([scaleName, _]) => (
                    <option key={scaleName} value={scaleName}>{scaleName}</option>
                ))
            }
        </select>
    );
}
export default ScaleSelector
