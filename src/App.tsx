import React from 'react';
import Calculator from './components/Calculator';
import Validate from './components/Validate';
import Button from './components/Button';
import Ui from './components/Ui';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import CaculatorRedux from './components/CaculatorRedux';
import Home from './pages/Home';

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/validate' element={<Validate/>} />
        <Route path='/caculator' element={<CaculatorRedux/>} />
      </Routes>
    </BrowserRouter>
   
  </>


}

export default App;
