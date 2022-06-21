import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Form } from 'react-bootstrap'
export const DynDropDown = (props) => {
  const [courseDetails, setcourseDetails] = useState([])
  useEffect(() => {
    const getCourseNames = async () => {
      const { data: res } = await axios.post('getAllCourseDetails')
      setcourseDetails(res)
    }
    getCourseNames()
  },[])
  var final = []
  var years = ['Select', '2020-21', '2021-22', '2022-23', '2023-24']
  var semesters = ['Select', 'odd', 'even']
  if (props.label === 'courseDetails') {
    final = courseDetails
    final.unshift('Select')
    final=Array.from(new Set(final))
  }
  else if(props.label === 'semesters')
    final = semesters
  else if (props.label === 'year')
      final = years
      return (
        <div>
          <Form.Select id="dropdown-basic-button" title="Dropdown button" onChange={(e) => {
  
            props.onChange(final[e.target.selectedIndex])
          }}>
            {
              final.map((val) =>
                <option>{val}</option>
              )
            }
          </Form.Select>
        </div>
      )
}