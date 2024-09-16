import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation'
import Home from './routes/Home';
import MegaMillion from './routes/MegaMillion';
import Powerball from './routes/Powerball';
import Footer from './components/Footer'
import Howtoplay from './routes/Howtoplay'

function App() {
  return (
    <div>
   <Routes>
    <Route path='/lottery-number-picker' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='powerball' element={<Powerball/>}/>
      <Route path='megamillion' element={<MegaMillion/>}/>
      <Route path='howtoplay' element={<Howtoplay/>}/>
    </Route>
   </Routes>
   <Footer/>
   </div>
  );
}

export default App;
