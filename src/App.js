import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0();
  if (isLoading) return <div>Li p load la...</div>

  return (
    <div className="main">

      <div className="center">
        <div className='small'>
        </div>
      </div>

      <div className="bigsquare">
        <div className="left">
         <div className="logo">
                    <h3>Abhishek</h3>
                    <h3>Abhishek</h3>              

         </div>
         <p>Login using Auth0</p>
        </div>
       <div className="right">
        <h1>Login</h1>
        <LoginButton />
        <LogoutButton />
        <Profile/>
       </div>
      </div>

    </div>
  );
}

export default App;
