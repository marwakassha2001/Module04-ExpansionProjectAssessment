import logo from './logo.svg';
import './App.css';
import Navbar from './layouts/Navbar/Navbar.js';
import AppRoutes from './routes/AppRoutes.js';
import Footer from './layouts/Footer/Footer.js'

function App() {
  return (
    <div className="App">
  <Navbar />
      <AppRoutes /> 
      <Footer/>
    </div>
  );
}

export default App;
