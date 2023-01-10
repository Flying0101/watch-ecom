
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import './css/Global.css'
import Nav from './components/Nav';
import Landing from './pages/Landing';
import Watches from './pages/Watches';
import Preview from './pages/Preview';
import Cart from './pages/Cart';


function App() {






  return (

    <RecoilRoot>
      <Router>
        <div className="App">
          <Nav />

          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="/cart" element={<Cart />} />


          </Routes>



        </div>
      </Router>
    </RecoilRoot>

  );
}

export default App;
