import React from 'react'
import { Banner } from '../components/banner'
import { GenerateCOFeedback } from '../components/generateCOFeedback'
import { NavBar } from '../components/NavBar'

export const FacultyDashboard = () => {
  return (
      <div>
          <NavBar />
          <Banner />
          <GenerateCOFeedback/> 
    </div>
  )
}
