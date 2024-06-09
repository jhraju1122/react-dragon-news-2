import React from 'react';
import Header from '../Shared/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <h2 className=' font-poppins'>this is home</h2>

            <div className='grid lg:grid-cols-4 gap-6'>
       <div className='border'>
        <LeftSideNav></LeftSideNav>
       </div>

       <div className='lg:col-span-2 border'>
        <h2>News Comming soon...</h2>
       </div>

       <div className='border'>
        <RightSideNav></RightSideNav>
       </div>



            </div>
        </div>
    );
};

export default Home;