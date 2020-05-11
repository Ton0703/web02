import React from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Sec01 from './components/Section1';
import Sec02 from './components/section2'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
       <Header />
       <Home />
       <Sec01 />
       <Sec02 />
       <Footer />
    </div>
  );
}

export default App;
