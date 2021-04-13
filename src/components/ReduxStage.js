import {Provider, ReactReduxContext} from "react-redux";
import {Stage} from "react-konva";
import React from "react";
import PropTypes from "prop-types";

const ReduxStage = ({children, stageWidth, stageHeight}) => (
    <ReactReduxContext.Consumer>
        {/*Workaround for Konva creating a 'fresh render' that causes the redux context to be*/}
        {/*'lost' when in a <Stage/> component*/}
        {({ store }) => (
            <Stage width={stageWidth} height={stageHeight}>
                <Provider store={store}>
                    {children}
                </Provider>
            </Stage>
        )}
    </ReactReduxContext.Consumer>
)
ReduxStage.propTypes = {
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired
}
export default ReduxStage
