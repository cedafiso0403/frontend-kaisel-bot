import './styles/App.css';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';
import Twitch from './pages/Twitch';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
      <div id="content=wrapper">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Stats" element={<Stats />}></Route>
          <Route exact path="/Twitch" element={<Twitch />}></Route>
          <Route path="/TestStats/*" element={<Stats />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
