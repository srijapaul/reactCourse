
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
//import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [mode,setmode]=useState("light");
  const [alert,setalert]=useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }

  const togglemode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor="darkslategrey";
      document.body.style.color="#61dafb";
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setmode("light");
      document.body.style.backgroundColor="#61dafb";
      document.body.style.color="darkslategrey";
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
   
      {/* <BrowserRouter> */}
        <Navbar
          title="TextDose"
        //  aboutText="About"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
        <TextArea showAlert={showAlert} textarea="Enter your text" />
        </div>
          {/* <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <TextArea showAlert={showAlert} textarea="Enter your text" />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter> */}
    </> 
  );
      {/* <Router>
      <Navbar title="TextDose" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert} />
      <div className="container">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextArea showAlert={showAlert} textarea="Enter your text" />
          </Route>
        </Switch>
        </div>
        </Router> */}
      
      {/* <About /> */}
    {/* </div> */}
    
  // );
}


export default App;
