import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import ContactUs from './Pages/Contact/ContactUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
        <Route path='/ContactUs' element={<ContactUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
