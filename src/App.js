
import './App.css';
import Home from './components/homepage/home';
import Navbar from './components/navbar/navbar';
import TrainHome from './components/trainhome/trainhome';
import Signup from './components/Signup/Signup';
import Dine from './components/Dine/dine';

import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<><Navbar /><Home /></>} />
          <Route exact path="/fortrain" element={<><Navbar /><TrainHome /></>} />
          <Route exact path="/order" element={<><Navbar /><Dine /></>} />

        </Routes>

        {/* <Navbar /> */}
        {/* <Signup/> */}
        {/* <Home /> */}
        {/* <TrainHome /> */}
        {/* <Dine /> */}

      </div>
    </BrowserRouter>
  )

}


export default App;
