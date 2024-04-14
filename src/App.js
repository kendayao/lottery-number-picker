import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Navigation/>}>
      
    </Route>
   </Routes>
  );
}

export default App;
