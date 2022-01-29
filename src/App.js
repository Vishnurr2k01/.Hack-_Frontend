
import './App.css';
import Home from './components/homepage/home';
import Navbar from './components/navbar/navbar';
import TrainHome from './components/trainhome/trainhome';
import Signup from './components/Signup/Signup';
import Dine from './components/Dine/dine';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Signup/> */}
      {/* <Home /> */}
      {/* <TrainHome /> */}
      {/* <Dine /> */}
      <Cart/>
    </div>
  );
}

export default App;
