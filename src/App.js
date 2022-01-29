
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
          <Route exact path="/" element={<><Navbar user={user} setUser={setUser} /><Home /></>} />
          <Route exact path="/fortrain" element={<><Navbar user={user} setUser={setUser} /><TrainHome /></>} />
          <Route exact path="/order" element={<><Navbar user={user} setUser={setUser} /><Dine /></>} />
          <Route exact path="/cart" element={<><Navbar user={user} setUser={setUser} /><Cart /></>} />

        </Routes>



      </div>
    </BrowserRouter>
  )

}


export default App;
