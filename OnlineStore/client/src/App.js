import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from "./components/routes/AppRoutes";
import HighHeader from "./components/header/HighHeader";
import LowHeader from "./components/header/LowHeader";
import Footer from "./components/footer/Footer";

function App() {
  return (

      /**
       * BrowserRouter используется для перехода между страницами.
       */
      <BrowserRouter>
        <HighHeader />
        <LowHeader />
        <AppRoutes/>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
