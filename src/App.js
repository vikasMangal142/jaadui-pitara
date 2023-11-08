import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Home";
import Translate from "./Components/Translate";
import Age from "./Components/Age";
import Category from "./Components/Category";
import Language from "./Components/Language";
import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import NeedHelp from "./Components/NeedHelp";
import Trial from "./Components/Trial";
import Speech from "./Speech";
import { HeaderProvider } from "./Context/HeaderContext";
import RouteChangeListener from "./RouteChangeListener";

function App() {
  return (
    <div className="App">
      <HeaderProvider>
      <Router>
        <RouteChangeListener />
        <Header />
        <Routes>

          <Route path="/" element={<Home key="home" />} />
          <Route path="/bhashini" element={<Translate />} />
          <Route path="/age" element={<Age />} />
          <Route path="/category" element={<Category />} />
          <Route path="/language" element={<Language />} />
          <Route path="/card" element={<Card />} />
          <Route path="/card2" element={<Card2 />} />
          <Route path="/trial" element={<Trial />} />
          <Route path="/speech" element={<Speech />} />
          <Route path="/needHelp" element={<NeedHelp />} />
          <Route
            path="/translate/:sourceLanguage/:targetLanguage"
            // path="/translate"
            element={[<Translate />]}
          />

        </Routes>
      </Router>
      </HeaderProvider>
    </div>
  );
}

export default App;
