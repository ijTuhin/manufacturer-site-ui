import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './routes/Common/Header/Header';
import Home from './routes/HomePage/Home/Home';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
