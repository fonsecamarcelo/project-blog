import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {AuthProvider} from "./context/AuthContext";
import {onAuthStateChanged} from 'firebase/auth';
import {useState, useEffect} from "react";
import {useAuth} from "./hooks/useAuth";
import Posts from "./pages/posts/Posts";
import Dashboard from "./pages/dashboard/Dashboard";
import {app} from "./firebase/config";
import './App.css'

const App = () => {
    //firebase starter
    app

    const [user, setUser] = useState(null);
    const { auth } = useAuth();
    console.log({user})

    const loadingUser = user === null;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    },[auth])

    // if (loadingUser) {
    //     return <p>Carregando...</p>
    // }

  return (
    <div className='App'>
        <AuthProvider value={{ user }}>
            <BrowserRouter>
                <Navbar user={user}/>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/about' element={<About />}/>
                        <Route path='/login' element={!user ? <Login /> : <Navigate to='/'/>}/>
                        <Route path='/register' element={!user ? <Register /> : <Navigate to='/'/>}/>
                        <Route path='/posts/create' element={user ? <Posts user={user} /> : <Navigate to='/login'/>}/>
                        <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login'/>}/>
                    </Routes>
                </div>
                <Footer/>
            </BrowserRouter>
        </AuthProvider>
    </div>
  )
}

export default App
