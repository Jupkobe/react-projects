import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainGameContainer from './components/MainGameContainer';

export default function App() {  
  return (
    <div className='w-full min-h-screen bg-image'>
      <Navbar />
      <MainGameContainer />
    </div>
  )
}
