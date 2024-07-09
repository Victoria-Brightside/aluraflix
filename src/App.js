import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import Nuevovid from "./pages/Nuevovid"
import Page404 from './pages/Page404';
import Header from './componentes/Header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuevo' element={<Nuevovid />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
