import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bmi from './pages/Bmi';
import Header from './components/Header';
import Footer from './components/Footer';
import Diet from './pages/Diet';
import './App.css';

function App() {
  return (
    <div className="layout">
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nedir' element={<Bmi />} />
          <Route path='/diyet' element={<Diet />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
