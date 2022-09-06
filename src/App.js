import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import About from './pages/About';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nedir' element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
