
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
          <Route exact path="/" element={<><Navbar /><Home /></>} />
          <Route exact path="/order" element={<><Navbar station={station} /><Dine /></>} />
          <Route exact path="/cart" element={<><Navbar /><Cart seat={seat} /></>} />
          <Route exact path="/trainroute" element={<><Navbar /><TrainRoute station={station} setStation={setStation} /></>} />
          <Route exact path="/fortrain" element={<><Navbar /><TrainHome seat={seat} setSeat={setSeat} /></>} />

        </Routes>



      </div>
    </BrowserRouter>
  )

}


export default App;
