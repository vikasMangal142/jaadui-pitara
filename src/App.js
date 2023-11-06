import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Home";
import Translate from "./Components/Translate";
import Age from "./Components/Age";
import Category from "./Components/Category";
import Language from "./Components/Language";
import Card from "./Components/Card";
import NeedHelp from "./Components/NeedHelp";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home key="home" />} />
          <Route path="/bhashini" element={<Translate />} />
          <Route path="/age" element={<Age />} />
          <Route path="/category" element={<Category />} />
          <Route path="/language" element={<Language />} />
          <Route path="/card" element={<Card />} />
          <Route path="/needHelp" element={<NeedHelp />} />
          <Route
            path="/translate/:sourceLanguage/:targetLanguage"
            // path="/translate"
            element={[<Translate />]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
