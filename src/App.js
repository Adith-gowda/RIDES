import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './component/login';
import SignUp from './component/SignUp';
import Home from './component/Home';
import Profile from './component/Profile';
import EditProfile from './component/EditProfile';
import About from './component/About';
import Bike from './component/Bike';
import Cart from './component/Cart';
import Wishlist from './component/Wishlist';
import Adminlogin from './component/Adminlogin';
import AdminHome from './component/AdminHome';
import UserDetails from './component/UserDetails';
import FeedBack from './component/FeedBack';
import OrderConfirm from './component/OrderConfirm';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login-admin" element={<Adminlogin />} />
          <Route path="/Admin/:id" element={<AdminHome />} />
          <Route path="/UserDetails/:id" element={<UserDetails />} />
          <Route path="/Feedback/:id" element={<FeedBack />} />
          <Route path="/signup-user" element={<SignUp/>} />
          <Route path="/Home/:id" element={<Home/>} />
          <Route path="/About/:id" element={<About/>} />
          <Route path="/Cart/:id" element={<Cart/>} />
          <Route path="/Wishlist/:id" element={<Wishlist/>} />
          <Route path="/bike/:id/:company" element={<Bike/>} />
          <Route path="/orderConfirmation/:productid/:id" element={<OrderConfirm/>} />
          <Route path="/Profile/:id" element={<Profile/>} />
          <Route path="/editProfile/:id" element={<EditProfile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
