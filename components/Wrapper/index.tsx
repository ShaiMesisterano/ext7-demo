import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Counter } from "..";

const Wrapper = () => {
    console.log('*** Hello from wrapper');

    return (
        <Provider store={store}>
            <div id="extjs_app" style={{ border: 'solid 5px red', width: '100%', height: '100%' }}>
                <Counter />
                <div className="launching">
                    <div id="splash">
                        <div id="theLoadingText">LOADING...</div>
                        <i className="fa fa-spinner fa-spin"></i>
                    </div>
                </div>
            </div>
        </Provider>
    )
}

export default Wrapper;