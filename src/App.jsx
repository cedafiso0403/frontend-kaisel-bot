import './styles/App.css';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';
import Twitch from './pages/Twitch';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Riot from './riot.txt'


function App() {
  return (
    <BrowserRouter basename="/frontend-kaisel-bot">
      <div id="content=wrapper">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Statistics" element={<Stats />}></Route>
          <Route exact path="/Twitch" element={<Twitch />}></Route>
          <Route path="/riot.txt" element={"5d74104f-5dac-4e5f-8595-473c31d3a478"}></Route>
          <Route path="/TestStats/*" element={<Stats />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
