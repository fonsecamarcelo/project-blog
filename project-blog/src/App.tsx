import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebase/config";
import './App.css'

const App = () => {
    const app = initializeApp(firebaseConfig);
  return (
    <div className='App'>
        <BrowserRouter>
            <Navbar/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App
