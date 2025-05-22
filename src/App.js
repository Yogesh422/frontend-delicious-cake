import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppHeader from './Components/Header';  // Correct path to your component
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';




function App() {
  return(
    <div className='app'>
      <header id='header'>
      <AppHeader />
      </header>
      <Outlet />
      <footer id='footer'>      
      <Footer />
      </footer>
    </div>
  );
}

export default App;
