
import './App.css';
import Home from './components/homepage/home';
import Navbar from './components/navbar/navbar';
import TrainHome from './components/trainhome/trainhome';
import Signup from './components/Signup/Signup';
import Dine from './components/Dine/dine';
import Cart from './components/Cart/Cart'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {useState} from 'react';

function App() {

  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><Navbar /><Home /></>} />
          <Route exact path="/fortrain" element={<><Navbar /><TrainHome /></>} />
          <Route exact path="/order" element={<><Navbar /><Dine /></>} />
          <Route exact path="/cart" element={<><Navbar /><Cart /></>} />

        </Routes>



      </div>
    </BrowserRouter>
  )

}


export default App;
