import React from 'react';
// import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from './components/Hero/Hero'
import './App.css';
import Trending from './components/trending/Trending';
import SouthDrama from './components/south-drama/SouthDrama';
import Navigation from './components/navigation/Navigation';
// import MxOriginal from './components/mx-original/Mx-Original';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Hero/>
      <Trending/>
      <SouthDrama/>
      {/* <MxOriginal/> */}
      {/* <BrowserRouter>
       <Routes>
         <Route path={'/'} element={}/>
       </Routes>
       </BrowserRouter> */}
    </div>
  );
}

export default App;
