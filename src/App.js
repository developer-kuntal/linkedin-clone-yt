import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import { useSelector } from 'react-redux';
import Feed from './conponents/feed/Feed';
import Header from './conponents/header/Header';
import Sidebar from './conponents/sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './conponents/login/Login';
import { auth } from './auth/firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">

      { /* Header */ }
      <Header/>
      { user ? (
        <div className="app_body"> 
          <Sidebar /> 
          <Feed />        
        </div>
      ) : <Login /> }
      
    </div>
  );
}

export default App;
