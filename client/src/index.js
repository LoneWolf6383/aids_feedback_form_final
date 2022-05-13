import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { FeedBackForm } from './pages/feedBackForm';
import ThemeContextWrapper from './Themes/themeContextWrapper';
import {GenerateCOFeedback} from './components/generateCOFeedback'
import {StudentLogInPage} from './pages/studentLogInPage'
ReactDOM.render(<ThemeContextWrapper>
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>  
        <Route path='/login' element={<StudentLogInPage/>}/>  
        <Route path='/feedback' element={<FeedBackForm />} />  
        <Route path='/facultyDashboard' element={<GenerateCOFeedback/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById('root')
);