import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)


  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      document.body.style.boxShadow = 'none'
      showAlert("Light mode has been enabled", "success")
    }

  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />

      
        <Routes>
          <Route path="/about" element={<About mode={mode} heading="About Us" />} />
          <Route path="/" element={<TextArea heading="Enter text here to analyze" showAlert={showAlert} />} />
        </Routes>
        
      </Router>

      {/* <About heading='About US'/> */}

    </>
  );
}

export default App;
