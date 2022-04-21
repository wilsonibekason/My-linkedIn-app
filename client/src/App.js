import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Login } from './components';

function App() {
  return (
    
     <Router>
       <div className="App">
       <Routes>
         <Route path='/' element={<Login/>} />
       </Routes>
       </div>
     </Router>
  );
}

export default App;
