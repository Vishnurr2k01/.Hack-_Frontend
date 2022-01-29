
import './App.css';
import Home from './components/homepage/home';
import Navbar from './components/navbar/navbar';
import TrainHome from './components/trainhome/trainhome';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Signup/> */}
      {/* <Home /> */}
      <TrainHome />
    </div>
  );
}

export default App;
