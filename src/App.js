import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation'
import Home from './routes/Home';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
    </Route>
   </Routes>
  );
}

export default App;
