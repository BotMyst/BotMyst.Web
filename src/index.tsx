import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.scss';

import { Navigation } from './components/navigation/navigation';

ReactDOM.render (
    <Navigation />,
    document.getElementsByClassName ('container') [0]
);