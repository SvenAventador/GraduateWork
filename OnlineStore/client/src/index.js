import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style/main.scss'
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const Context = createContext(null) // инструмент управления состоянием,
                                                     // используемый для обмена данными между компонентами React

root.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            device: new DeviceStore()
        }
    }>
        <div className="container">
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </div>
    </Context.Provider>
);
