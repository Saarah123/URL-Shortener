import React from 'react';
import './App.css';
import {ShortUrl} from './components/ShortUrl';
import {Route, Routes} from "react-router-dom";
import { LogIn } from './components/LogIn';



export const App=()=> {
    
  return (
    <>
    <Routes>
    < Route path ="/"  element={<LogIn/>} />
    < Route path ="/ShortUrl"  element={<ShortUrl/>} />
    </Routes>
   </>
  );
}

export default App;