import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Events from './Pages/Event';
import Products from './Pages/Products';
import Article from './Pages/Article';
import Birthday from './Pages/Birthday';
import Wedding from './Pages/Wedding';
import Corporate from './Pages/Corporate';
import Cart from './Pages/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/event" element={<Events />} />
        <Route path='/event/birthday' element={<Birthday />} />
        <Route path='/event/wedding' element={<Wedding />} />
        <Route path='/event/corporate' element={<Corporate />} />
        <Route path='/article' element={<Article />} />
      </Routes>
    </Router>
  );
};

export default App;
