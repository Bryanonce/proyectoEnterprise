import React from 'react';
import ReactDOM from 'react-dom';
import { ServiceState } from './context/ServiceState'

//Import App
import {EntrevistaApp} from './EntrevistaApp';

ReactDOM.render(
    <React.StrictMode>
        <ServiceState>
            <EntrevistaApp />
        </ServiceState>
    </React.StrictMode>,
    document.getElementById('root')
)