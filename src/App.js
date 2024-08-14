import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router';
import Home from './Pages/Home';
import Product from './Pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
