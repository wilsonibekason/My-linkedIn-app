import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Header, Home, Login } from './components';

function App() {
  return (
    
     <Router>
       <div className="App">
       <Routes>
         <Route path='/' element={<Login/>} />
       </Routes>
       <Routes>
         {/* <Route path='/home' element={<Home/>}/>
         <Route path='/home' element={<Header/>}/> */}
         <Route path='/home' element={<><Header/> <Home/></>}/>
       </Routes>
       </div>
     </Router>
  );
}

export default App;
