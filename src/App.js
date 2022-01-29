
import './App.css';
import Home from './components/homepage/home';
import Navbar from './components/navbar/navbar';
import TrainHome from './components/trainhome/trainhome';
import Signup from './components/Signup/Signup';
import Dine from './components/Dine/dine';


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Signup/> */}
      {/* <Home /> */}
      {/* <TrainHome /> */}
      <Dine />
    </div>
  );
}

export default App;
