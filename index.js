//this file exists so the webpack build process will succeed
Ext._find = require('lodash.find');

import React from 'react';
import ReactDOM from 'react-dom';
import {BlueButton, Wrapper} from './components';

Ext.xCreateComponent = function createComponent(element) {
    ReactDOM.render(<BlueButton/>, element);
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));