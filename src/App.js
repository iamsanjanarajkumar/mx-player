import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Hero from './components/Hero/Hero'
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero/>
      {/* <BrowserRouter>
       <Routes>
         <Route path={'/'} element={}/>
       </Routes>
       </BrowserRouter> */}
    </div>
  );
}

export default App;
