import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../src/Components/Home/Home'
import { BrowserRouter, Route, Routes ,useRoutes} from "react-router-dom";
import NotFound from './Components/Home/NotFound/NotFound';
import Blogs from './Components/Home/Blogs/Blogs';
import CreateBlog from './Components/CreateBlog/CreateBlog';
import Blog from './Components/Blog/Blog';
import Login from './Components/Authintication/Login/Login';
import Regristration from './Components/Authintication/Regristration/Regristration';
import Reset from './Components/Authintication/Reset/Reset';
import Details from './Components/Details/Details';
import DateAndTime from './Components/DateAndTime/DateAndTime';
import AuthProvider from './Components/Context/AuthProvider';
import RequiredRoute from './Components/RequiredRoute/RequiredRoute';
import Comments from './Components/Comments/Comments';
import ContactUs from './Components/ContactUs/ContactUs';
import Information from './Components/Information/Information';
import Dashbord from './Components/Dashbord/Dashbord/Dashbord';
import DashbordHome from './Components/Dashbord/DashbordHome/DashbordHome';
import DeleteBlog from './Components/DeleteBlog/DeleteBlog';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
// import useAuth from './Hooks/UseAuth/UseAuth';




function App() {
  return (
        <AuthProvider>
            <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home></Home>}></Route>
                  <Route path='/home' element={<Home></Home>}></Route>
                  <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                  <Route path='/blog' element={<Blog></Blog>}></Route>
                  <Route path='/blog/:detail' element={<Details></Details>}></Route>
                  <Route path='/login' element={<Login></Login>}></Route>
                  <Route path='/reset' element={<Reset/>}></Route>
                  <Route path='/regristration' element={<Regristration></Regristration>}></Route>
                  <Route path='/contactus' element={<RequiredRoute><ContactUs/></RequiredRoute>}></Route>
                  <Route path='/public' element={<RequiredRoute><Comments/></RequiredRoute>}></Route>
                  <Route path='/dateandtime' element={<DateAndTime></DateAndTime>}></Route>
                  <Route path='/dashbord' element={<Dashbord></Dashbord>}>
                       <Route path='/dashbord' element={<DashbordHome></DashbordHome>}></Route>
                       <Route path='/dashbord/createBlog' element={<CreateBlog></CreateBlog>}></Route>
                       <Route path='/dashbord/information' element={<Information/>}></Route>
                       <Route path='/dashbord/deleteblog' element={<DeleteBlog/>}></Route>
                       <Route path='/dashbord/createAdmin' element={<MakeAdmin/>}></Route>
                  </Route>


                  <Route path='*' element={<NotFound></NotFound>}></Route>
              </Routes>
        </BrowserRouter>
        </AuthProvider> 
  );
}

export default App;
