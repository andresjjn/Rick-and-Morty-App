import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Characters from './components/Characters';
import Episodes from './components/Episodes';
import Locations from './components/Locations';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="characters" element={<Characters />} /> 
        <Route path="episodes" element={<Episodes />} />{/*
        <Route path="locations" element={<Locations />} /> */}
      </Routes>
    </div>
  );
}

export default App;
