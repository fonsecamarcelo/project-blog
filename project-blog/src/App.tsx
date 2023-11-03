import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "./firebase/config";
import {AuthProvider} from "./context/AuthContext";
import {onAuthStateChanged} from 'firebase/auth';
import {useState, useEffect} from "react";
import {useAuth} from "./hooks/useAuth";
import './App.css'

const App = () => {
    const app = initializeApp(firebaseConfig);

    const [user, setUser] = useState(null);
    const { auth } = useAuth();

    const loadingUser = user === null;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    },[auth])

    if (loadingUser) {
        return <p>Carregando...</p>
    }

  return (
    <div className='App'>
        <AuthProvider value={{ user }}>
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
        </AuthProvider>
    </div>
  )
}

export default App
