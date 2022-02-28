import './styles/App.css';
import Commands from './pages/Commands';
import Contact from './pages/Contact';
import Home from "./pages/Home";
import Stats from './pages/Stats';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div id="content=wrapper">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Commands" element={<Commands />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route path="/TestStats" element={<Stats />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
