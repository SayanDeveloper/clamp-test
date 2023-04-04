import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='bg-black min-h-[100vh] w-full text-white'>
      <section className='content-container max-w-[1000px] m-auto py-4'>
        <div className='flex'>
          <div className='flex'>
            <div className='flex flex-col gap-5'>
              <UserInfo />
              <Navigation page="dashboard" />
            </div>
            <div></div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default App;
