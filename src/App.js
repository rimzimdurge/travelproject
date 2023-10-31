import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const App=()=> {
  return (
      <>
      <Navbar/>
      <Home/>
      <Main/>
      <Footer/>
      </>
  )
}

export default App;
