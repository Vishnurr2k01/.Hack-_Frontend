
import './App.css';
import Home from './components/homepage/home';
import Navbar from './components/navbar/navbar';
import TrainHome from './components/trainhome/trainhome';
import Signup from './components/Signup/Signup';
import Dine from './components/Dine/dine';
import Cart from './components/Cart/Cart'
import TrainRoute from './components/trainroute/trainroute';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react';

import {useState} from 'react';

function App() {


  const [station, setStation] = useState("")
  const [seat, setSeat] = useState({
    coach: '',
    seatNumber: ''
  })

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><Navbar user={user} setUser={setUser} /><Home /></>} />
          <Route exact path="/fortrain" element={<><Navbar user={user} setUser={setUser} /><TrainHome seat={seat} setSeat={setSeat} /></>} />
          <Route exact path="/cart" element={<><Navbar user={user} setUser={setUser}/><Cart seat={seat} /></>} />
          <Route exact path="/trainroute" element={<><Navbar /><TrainRoute station={station} setStation={setStation} /></>} />

        </Routes>



      </div>
    </BrowserRouter>
  )

}


export default App;
