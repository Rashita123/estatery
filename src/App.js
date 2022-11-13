import './App.css';
import { Home, Favourites } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
      </Routes>
    </div>
  );
}

export default App;
