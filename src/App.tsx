import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './page/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='*' element={<Navigate to={'/'}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
