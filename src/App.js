import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Nav from './components/Nav';
import ReservationPage from './components/ReservationPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/reservation-page" element={ <ReservationPage /> }/>
        <Route path="/menu" />
        <Route path="/order" />
        <Route path="/login" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
