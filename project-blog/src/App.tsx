import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {AuthProvider} from "./context/AuthContext";
import {onAuthStateChanged} from 'firebase/auth';
import React, {useState, useEffect} from "react";
import {useAuth} from "./hooks/useAuth";
import CreatePosts from "./pages/createPosts/CreatePosts";
import Dashboard from "./pages/dashboard/Dashboard";
import {app} from "./firebase/config";
import Search from "./pages/Search/Search";
import EditPost from "./pages/editPost/editPost";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

const App = () => {
    //firebase starter
    app

    const [user, setUser] = useState(null);
    const { auth } = useAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
    },[auth])


  return (
    <div className='App'>
        <AuthProvider value={{ user }}>
            <BrowserRouter>
                <Navbar user={user}/>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/about' element={<About />}/>
                        <Route path='/search' element={<Search />}/>
                        <Route path='/login' element={!user ? <Login /> : <Navigate to='/'/>}/>
                        <Route path='/register' element={!user ? <Register /> : <Navigate to='/'/>}/>
                        <Route path='/posts/edit/:id' element={user ? <EditPost user={user} /> : <Navigate to='/login'/>}/>
                        <Route path='/posts/create' element={user ? <CreatePosts user={user} /> : <Navigate to='/login'/>}/>
                        <Route path='/dashboard' element={user ? <Dashboard /> : <Navigate to='/login'/>}/>
                    </Routes>
                </div>
                <Footer/>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </BrowserRouter>
        </AuthProvider>
    </div>
  )
}

export default App
