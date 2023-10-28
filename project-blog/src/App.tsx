import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default App
