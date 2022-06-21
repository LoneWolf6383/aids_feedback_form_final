import React,{useState} from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export const SubmitReview = (props) => {
    const [error, setError] = useState('')
    async function handleSubmit(){
        try {
            console.log(props.ratings);
            const val = {
                username: window.sessionStorage.getItem('username'),
                review:props.ratings
            }
            const data = []
            // const { data: res } = await axios.post('feedback/review', val)
            } catch (error) {
                if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                    setError(error.response.data.message)
                }
           }
        }
        return (
            <div>
                <Button
                type="submit"
                className='btn btn-primary'
                onClick={()=>{handleSubmit()}}
                style={{
                    position: "relative",
                }}>Submit</Button>     
                <p>{error}</p>
            </div>
  )
}
