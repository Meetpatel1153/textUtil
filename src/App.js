
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/textForm';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }
  return (
     <>
    <Router>
    <Navbar title="textUtils"   / >
      <Alert alert={alert}/>
    <div className="container">
      <Routes>
          <Route path="/about" element={<About/>}>
            
          </Route>
          <Route  path="/" element={<TextForm showAlert={showAlert} heading="enter text here to analyze."/>}>
          
          </Route>
          </Routes>
   
    </div>
    </Router>
    
    </>
  );
}

export default App;
