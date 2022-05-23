import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUsPage from './routes/AboutUsPage/AboutUsPage';
import Login from './routes/Auth/Login/Login';
import RequireAuth from './routes/Auth/RequireAuth/RequireAuth';
import Blogs from './routes/Blogs/Blogs';
import Footer from './routes/Common/Footer/Footer';
import Header from './routes/Common/Header/Header';
import Dashboard from './routes/DashBoard/Dashboard';
import Page404 from './routes/errorPage/Page404';
import AddReviewPage from './routes/ForUser/AddReviewPage/AddReviewPage';
import MyOrderPage from './routes/ForUser/MyOrderPage/MyOrderPage';
import MyProfilePage from './routes/ForUser/MyProfilePage/MyProfilePage';
import PurchasePage from './routes/ForUser/PurchasePage/PurchasePage';
import Home from './routes/HomePage/Home/Home';
import Portfolio from './routes/PortfolioPage/Portfolio/Portfolio';

function App() {
  return (
    <div className="relative">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/blogs' element={<Blogs></Blogs>} />
        <Route path='/portfolio' element={<Portfolio></Portfolio>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/about-us' element={<AboutUsPage></AboutUsPage>} />
        <Route path='*' element={<Page404></Page404>} />



        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyProfilePage></MyProfilePage>}></Route>
          <Route path="user-orders" element={<MyOrderPage></MyOrderPage>}></Route>
          <Route path="purchase" element={<PurchasePage></PurchasePage>}></Route>
          <Route path="add-review" element={<AddReviewPage></AddReviewPage>}></Route>
        </Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
