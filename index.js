import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'
import "./index.css"
import {RecoilRoot} from 'recoil'

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);

root.render(
    <RecoilRoot>
        <App/>
    </RecoilRoot>
);