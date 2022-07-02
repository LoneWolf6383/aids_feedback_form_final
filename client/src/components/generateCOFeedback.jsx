import axios from 'axios';
import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import { DynDropDown } from './dynDropDown'
export const GenerateCOFeedback = () => {
  const [academicYear, setAcademicYear] = useState('')
  const [semester, setSemester] = useState('')
  const [courseDetails, setCourseDetails] = useState('')
  const [response, setResponse] = useState('')
  const sendFeedback = async() => {
    var data = {
      facultyUserName: window.sessionStorage.getItem('username'),
      academicYear: academicYear,
      semester: semester,
      courseId: courseDetails.split('-')[1],
      courseName: courseDetails.split('-')[0],
    }
    const { data: res } = await axios.post('addFeedBack', data)
    setResponse(res.message)
  }
  return (
    <div style={{backgroundColor:'',width:'100%',height:'100%'}}>
                  <table style={{
                    width:'100%'  
                  }}>
                    <tbody style={{width:'100%'}}>
                    <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
                      <td style={{flex:'1'}}><label>Academic Year:</label></td>
                      <td style={{flex:'1'}}><DynDropDown onChange={val=>{setAcademicYear(val)}} label='year'/></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex'}}>
                      <td style={{flex:'1'}}><label>Semester:</label></td>
                      <td style={{flex:'1'}}><DynDropDown onChange={val=>{setSemester(val)}} label='semesters'/></td>
                    </tr>
                    <tr class='tdVal' style={{display: 'flex'}}>
                      <td style={{flex:'1'}}><label>Course Name:</label></td>
                        <td style={{ flex: '1' }}><DynDropDown onChange={val => { setCourseDetails(val) }} label='courseDetails' /><label></label></td>
                    </tr>
                    </tbody>
                    <Button className='btn btn-success' onClick={sendFeedback}>Send for Feedback</Button> <p>{ response }</p>
                  </table>
                </div>
  )
}
