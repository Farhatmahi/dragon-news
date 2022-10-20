import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav/RightNav';


const Main = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto grid grid-cols-3">
                <div className=""><LeftNav /></div>
                <div className=""><Outlet /></div>
                <div className=""><RightNav /></div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;