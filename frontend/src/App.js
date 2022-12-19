import Home from './pages/Home/Home';
import './app.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Products from './pages/Product/Products';
import Category from './pages/Category/Category';
import Menu from './components/Menu/Menu';
import Blogdetail from './pages/Blogdetail/Blogdetail';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/Checkout/CheckOut';
import Profile from './pages/Profile/Profile'
import RequireAuth from './other/RequireAuth'
import Unthorized from './pages/unauthorized/Unthorized';
import Pagenotfound from './pages/unauthorized/Pagenotfound';
const ROLES = {
  'User': 'user',
  'Admin': 'admin'
}


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/product" element={<Products />} />
        <Route path="/category" element={<Menu />} />
        <Route path="/category/:categoryname" element={<Category />} />
        <Route path="/blog/:blogid" element={<Blogdetail />} />
        <Route path="/unauthorized" element={<Unthorized />} />
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
