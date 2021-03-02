import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Splash from './components/Splash';

function App() {
  return (
    <>
      <Navbar/>
      <Splash/>
    </>
  );
}

export default App;
