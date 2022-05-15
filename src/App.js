import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import News from './pages/News';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/news' element={<News/>} />
           <Route path='*' element={<NotFound/>} />

        </Routes>
    
    </BrowserRouter>
  );
};

export default App;