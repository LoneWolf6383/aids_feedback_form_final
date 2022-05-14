import axios from 'axios'
import React, { useState } from 'react'
import './studentLogIn.css'
import { NavBar } from '../components/NavBar'
import { Banner } from '../components/banner'
import CaptchaBOX from '../components/captchaBOX'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

export const StudentLogInPage = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isVerified, setisVerified] = useState()
    const [error, setError] = useState('')
    async function handleSignIn(event) {
      event.preventDefault()
        const data = { username, password ,isVerified }
        try {
            const url = '/feedback/signin'
          window.sessionStorage.setItem('username', username)
          const res = await axios.post(url, data)
          if (res.data ==='/feedback'){
            window.sessionStorage.setItem('username',username)  
            window.location.replace('http://172.16.10.98:3000/feedback')
          }
          if (res.data ==='/facultyDashboard'){
            window.sessionStorage.setItem('username',username)  
            window.location.replace('http://172.16.10.98:3000/facultyDashboard')
          }
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) 
                setError(error.response.data.message)
       }
    }
  return (
    <><NavBar /><Banner />
      <div id="loginform">
        <h4 id="headerTitle"> ARTIFICIAL INTELLIGENCE DEPARTMENT PORTAL </h4>
        <div>
          <div class="row">
            <label>UserName:</label>
            <input
              type='text'
              placeholder='Enter your Username'
              name='Username'
              value={username}
              onChange={(e) => setUserName(e.target.value)} />
          </div>
          <div class="row">
            <label>Password:</label>
            <input
              type='password'
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <br />
          <br />
          <div style={{ display: 'flex' }}>
            <CaptchaBOX onChange={(val) => { setisVerified(val)} } />
            {isVerified === true && (<ThumbUpOffAltIcon style={{ margin: '22px -15px', }} />)}
            {isVerified === false && (<ThumbDownOffAltIcon style={{ margin: '22px -15px', }} />)}
          </div>
          <div id="button" class="row"> 
            <button onClick={handleSignIn}>Log In</button>
          </div>
        </div>
      </div>
   </>
 )
}
