import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import AddInventoryItem from './components/AddInventoryItem/AddInventoryItem';
import MyItems from './components/MyItems/MyItems';
import UpdateItemInformation from './components/UpdateItemInformation/UpdateItemInformation';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Blogs from './components/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/manageInventories' element={<RequireAuth>
          <ManageInventories />
        </RequireAuth>}>
        </Route>
        <Route path='/inventory/:id' element={<RequireAuth>
          <UpdateItemInformation />
        </RequireAuth>}>
        </Route>
        <Route path='/addInventoryItem' element={<RequireAuth>
          <AddInventoryItem />
        </RequireAuth>}>
        </Route>
        <Route path='/myItems' element={<RequireAuth>
          <MyItems />
        </RequireAuth>}>
        </Route>
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
