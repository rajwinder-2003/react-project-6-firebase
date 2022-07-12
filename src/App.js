import React , {useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css'
import firebase from "firebase/app";
import "firebase/auth";

import Home from "./pages/Home";
import Sinup from "./pages/Sinup";
import SinIn from "./pages/SinIn";
import Notefound from "./pages/Notefound";
import { UserContaxt } from './context/UserContaxt';
import Footer from './layout/Footer';
import Header from './layout/Header';

import firebaseConfig from './config/firebaseConfig'
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <UserContaxt.Provider value={{user,setUser}}>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Sinup/>}/>
            <Route path='/signin' element={<SinIn/>}/>
            <Route path='*' element={<Notefound/>}/>
          </Routes>
          <Footer/>
      </UserContaxt.Provider>
    </BrowserRouter>
  );
}

export default App;
