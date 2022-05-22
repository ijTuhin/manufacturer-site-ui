import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './routes/Blogs/Blogs';
import Footer from './routes/Common/Footer/Footer';
import Header from './routes/Common/Header/Header';
import UserNav from './routes/Common/UserNav/UserNav';
import Page404 from './routes/errorPage/Page404';
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
        <Route path='*' element={<Page404></Page404>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
