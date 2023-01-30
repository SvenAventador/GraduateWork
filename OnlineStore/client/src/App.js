import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from "./components/routes/AppRoutes";

function App() {
    return (
        /**
         * BrowserRouter используется для перехода между страницами.
         */
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    );
}

export default App;
