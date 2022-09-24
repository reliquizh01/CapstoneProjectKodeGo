import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {

  // Add Webpages here once miss jass finished their side
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
