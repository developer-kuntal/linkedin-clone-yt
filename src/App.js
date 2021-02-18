import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import './App.css';
import { useSelector } from 'react-redux';
import Feed from './components/feed/Feed';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './components/login/Login';
import { auth } from './auth/firebase';
import Widgets from './components/widgets/Widgets';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app">

      { /* Header */ }
      <Header/>
      { user ? (
        <div className="app__body"> 
          <Sidebar /> 
          <Feed />   
          <Widgets />
        </div>
      ) : <Login /> }
      
    </div>
  );
}

export default App;
