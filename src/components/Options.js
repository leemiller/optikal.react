import TonicSelector from "./TonicSelector";
import ScaleSelector from "./ScaleSelector";
import InstrumentSelector from "./InstrumentSelector";
import FlattedNameToggle from "./FlattedNameToggle";
import React from "react";

const Options = () => {
    return (

        <div id="option-selections">
            <TonicSelector/>
            <ScaleSelector/>
            <InstrumentSelector/>
            <FlattedNameToggle/>
        </div>
    )
}
export default Options
