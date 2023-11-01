import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Translate from "./Components/Translate";
import Age from "./Components/Age";
import Category from "./Components/Category";
import Language from "./Components/Language";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={[<Home key="home" />]} />
        <Route path="/bhashini" element={<Translate></Translate>} />
        <Route path="/age" element={<Age />} />
        <Route path="/category" element={<Category />} />
        <Route path="/language" element={<Language />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
