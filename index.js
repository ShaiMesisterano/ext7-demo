import React from 'react';
import ReactDOM from 'react-dom';
import {BlueButton, Wrapper} from './components';

Ext.xCreateComponent = function createComponent(element) {
    ReactDOM.render(<BlueButton/>, element);
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));