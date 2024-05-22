
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import Signup from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
     <div>
      <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/login' element={<Login/>} />
           <Route path='/signup' element={<Signup/>}  />
          
      </Routes>
      
     </div>
      
  );
}

export default App;
