import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation'
import Home from './routes/Home';
import MegaMillion from './routes/MegaMillion';
import Powerball from './routes/Powerball';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='powerball' element={<MegaMillion/>}/>
      <Route path='megamillion' element={<Powerball/>}/>
    </Route>
   </Routes>
  );
}

export default App;
