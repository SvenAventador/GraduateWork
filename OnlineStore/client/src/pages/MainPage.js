import React from 'react';
import HighHeader from "../components/header/HighHeader";
import LowHeader from "../components/header/LowHeader";
import MainCategories from "../components/main-page/MainCategories";
import TopBrands from "../components/main-page/TopBrands";
import OurSocial from "../components/main-page/OurSocial";
import Footer from "../components/footer/Footer";

const MainPage = () => {
    return (
        <div>
            <HighHeader />
            <LowHeader />
            <MainCategories />
            <TopBrands />
            <OurSocial />
            <Footer />
        </div>
    );
};

export default MainPage;