import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Reservation from './Pages/Reservation';

import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='reservation' element={<Reservation/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
