import React,{useState} from 'react'
import {Button} from 'react-bootstrap'
import axios from 'axios';

export const AddCourse = () => {
  const [response, setResponse] = useState('')
  const [courseName, setCourseName] = useState('')
  const [courseId, setCourseId] = useState('')
  const [regulation, setRegulation] = useState('')

    const handleAddCourse = async () =>{
    var co = (document.getElementById('co_input').value).split('\n')
    for (let i = 0; i < co.length; i++) {
        if (co[i].includes('\n'))
            co[i]=co[i].split('\n')[0]
        }
      co.splice(0, 1)
      const data = {
        courseName: courseName,
        courseId: courseId,
        regulation: regulation,
        CO:co
       }
    const { data: res } = await axios.post('/addCourse',data)
    setResponse(res)
    }
  return (
    <div style={{backgroundColor:'',width:'100%',height:'100%'}}>
      <table style={{ width:'100%' }}>
        <tbody style={{width:'100%'}}>
        <tr class='tdVal' style={{display: 'flex'}}>
          <td style={{flex:'1'}}><label>Course Name:</label></td>
            <td style={{ flex: '1' }}>
                <div class="">
                    <label for="" class="form-label">
                    <input type="text" onChange={(e)=> setCourseName(e.target.value)} class="form-control" name="" id=""  placeholder=""/>
                    </label>
                </div>
            </td>
        </tr>
        <tr class='tdVal' style={{display: 'flex'}}>
          <td style={{flex:'1'}}><label>Course Id:</label></td>
            <td style={{ flex: '1' }}>
                <div class="">
                    <label for="" class="form-label">
                    <input type="text" onChange={(e)=> setCourseId(e.target.value)} class="form-control" name="" id=""  placeholder=""/>
                    </label>
                </div>
            </td>
        </tr>
        <tr class='tdVal' style={{display: 'flex',width:'100%'}}>
          <td style={{flex:'1'}}><label>Regulation:</label></td>
          <td style={{ flex: '1' }}>
                <div class="">
                    <label for="" class="form-label">
                    <input type="text" onChange={(e)=> setRegulation(e.target.value)} class="form-control" name="" id=""  placeholder="Example : 19"/>
                    </label>
                </div>
          </td>
        </tr>
        <tr class='tdVal' style={{display: 'flex'}}>
          <td style={{flex:'1'}}><label>Enter CO's:</label></td>
          <td style={{ flex: '1' }}>
              <div>
                <textarea class="form-control" name="" id='co_input' rows="5" cols="58" placeholder='Just Copy paste them from syllabus pdf'></textarea>
              </div>
          </td>
        </tr>
        </tbody>
        <Button className='btn btn-success' onClick={handleAddCourse}>Add Course</Button> <p>{  response }</p>
      </table>
    </div>
  )
}
