import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);

const showAlert =(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);


}

  const toggleMode =()=>{
    console.log("toggle function")
    if(mode ==='light'){
      
      setMode('dark'); 
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","Success")
      document.title="TextUtils- Dark Mode";
    }
    else{
      console.log('light change');
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","Success")
      document.title="TextUtils- Light Mode";
    }
  }
  return (
    <>
<Router>
    <Navbar title="Textutils2" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Routes>
          <Route exact path="/about" element={<About/>}/>
            
          <Route exact path="/" element={<TextForm heading="Enter Your Text To Analyze" mode={mode} showAlert={showAlert}/>}>
          
          </Route>
        </Routes>
    
    
    </div>
    
    </Router>
    </>
  );
}

export default App;
