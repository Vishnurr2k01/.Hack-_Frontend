
import './App.css';
import Home from './components/homepage/home';
import Navbar from './components/navbar/navbar';
import TrainHome from './components/trainhome/trainhome';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <TrainHome />
    </div>
  );
}

export default App;
