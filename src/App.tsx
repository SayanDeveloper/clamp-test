import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Navigation from './components/Navigation';
import GoProContainer from './components/GoProContainer';
import Revenue from './components/Revenue';
import Category from './components/Category';
import Slots from './components/Slots';
import CommunityJoiner from './components/CommunityJoiner';
import TxDetails from './components/TxDetails';
import ProjectDetails from './components/ProjectDetails';
import ProjectProgress from './components/ProjectProgress';

function App() {
  console.log(window.innerWidth)
  return (
    <div className='bg-black min-h-[100vh] w-full text-white 2xl:scale-150 origin-top'>
      <section className='content-container max-w-[1040px] m-auto py-8'>
        <div className='flex flex-col lg:flex-row gap-8 items-center'>
          <div className='flex flex-col sm:flex-row gap-8'>
            <div className='flex flex-col gap-5'>
              <UserInfo />
              <Navigation page="dashboard" />
              <GoProContainer />
            </div>
            <div className='max-w-[330px] flex flex-col gap-5'>
              <Revenue />
              <div className='flex gap-[16px]'>
                <Category />
                <Category />
              </div>
              <Slots />
            </div>
          </div>
          <div className='flex flex-col gap-5 w-[calc(100vw-40px)] sm:w-[582px] lg:w-[430px]'>
            <CommunityJoiner />
            <TxDetails />
            <div className='flex gap-[16px]'>
              <ProjectDetails />
              <ProjectProgress />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
