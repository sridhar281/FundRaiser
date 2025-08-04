import React,{useEffect} from 'react'
import { Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import InternPortal from './pages/InternPortal';
import Leaderboard from './pages/LeaderBoard';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from './store/UseAuthStore';
import {Loader} from "lucide-react"
import { Toaster } from 'react-hot-toast';


const App1 = () => {
  const {authuser,checkAuth,isCheckingAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({'Auth User:': authuser});
  if(isCheckingAuth){
    // Show a loading spinner while checking authentication
  return(
      <div className="flex justify-center items-center h-screen">
        <Loader className="animate-spin text-grey-500" size={72} />
      </div>
  );
  }
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={ authuser?<HomePage/>: <Navigate to="/login"/>} />
        <Route path="/signup" element={!authuser?<SignUpPage />:<Navigate to="/"/>} />
        <Route path="/login" element={!authuser?<LoginPage />:<Navigate to="/"/>} />
        
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/portal" element={<InternPortal />} />

      </Routes> 
      <Toaster/>
    </div>
  )
};

export default App1
