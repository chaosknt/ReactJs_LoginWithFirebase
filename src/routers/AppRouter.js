import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import AuthRouter from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';


import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import MainScreen from '../components/main/MainScreen';

const AppRouter = () => {

  const dispatch = useDispatch();

  const [ cheking, setCheking ] = useState(true);
  const [ isLoggedIn, setisLoggedIn ] = useState(false);


  useEffect(() => {
      
    firebase.auth().onAuthStateChanged( (user) => {

      if( user?.uid){
        dispatch( login(user.uid, user.displayName) );
        setisLoggedIn( true );
      }else{
        setisLoggedIn( false );
      }

      setCheking(false);

      });

    }, [ dispatch, setCheking, setisLoggedIn ])

    if( cheking ){
      return (
        <h1>Espere...</h1>
      )
    }
    return (
      <Router>
        <div>
            <Switch>
                <PublicRoute path='/auth' isAuthenticated ={ isLoggedIn } component = { AuthRouter } />

                <PrivateRoute exact path='/' isAuthenticated ={ isLoggedIn } component = { MainScreen } />

                <Redirect to='/auth/login' />
            </Switch>     
        </div>
      </Router>  
    )
}

export default AppRouter

