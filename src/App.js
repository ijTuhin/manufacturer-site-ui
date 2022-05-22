import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './routes/Common/Header/Header';
import UserNav from './routes/Common/UserNav/UserNav';
import Home from './routes/HomePage/Home/Home';

function App() {
  return (
    <div className="relative">
      <Header></Header>
      <UserNav></UserNav>
      <Routes>
        <Route path='/' element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
