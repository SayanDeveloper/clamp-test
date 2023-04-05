import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Navigation from './components/Navigation';
import GoProContainer from './components/GoProContainer';
import Revenue from './components/Revenue';
import Category from './components/Category';
import Slots from './components/Slots';

function App() {
  return (
    <div className='bg-black min-h-[100vh] w-full text-white'>
      <section className='content-container max-w-[1000px] m-auto py-4'>
        <div className='flex'>
          <div className='flex gap-8'>
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
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default App;
