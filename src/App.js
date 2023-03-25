import './App.css';
import Header from './components/header/Header'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePages from './components/pageContent/HomePages'


function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<HomePages/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
