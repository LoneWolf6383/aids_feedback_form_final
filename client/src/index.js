import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { FeedBackForm } from './pages/feedBackForm';
import ThemeContextWrapper from './Themes/themeContextWrapper';
import { LogInPage } from './pages/logInPage'
import {FacultyDashboard} from './pages/facultyDashboard'
import { StudentDashboard } from './pages/studentDashboard';
ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}/>  
          <Route path='/login' element={<LogInPage/>}/>  
          <Route path='/studentDashboard' element={<StudentDashboard />} />  
          <Route path='/studentDashboard/feedback' element={ <FeedBackForm/> } />
          <Route path='/facultyDashboard' element={<FacultyDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById('root')
);