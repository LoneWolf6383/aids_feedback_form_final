import StarRatings from "react-star-ratings";
import React,{useState} from 'react'
import _ from 'lodash' 
import CancelIcon from '@mui/icons-material/Cancel';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import axios from "axios";
var ratings={}
const StarRating = (props) => {
  const [done, setDone] = useState(false)
  const [rate, setRate] = useState(0)
  async function handleSubmit(ratings){
    try {
        const val = {
            username: window.sessionStorage.getItem('username'),
            review:ratings
      }
      console.log(val)
        await axios.post('feedback/review', val)
        setDone(true)
        } catch (error) {
          console.log(error);
        }
  }
  const handleRating =  (newRating, name) => {
    name = name.split('+')
    _.set(ratings, [name[0], name[1]], newRating)
    setRate(newRating)
    handleSubmit(ratings)
  }
  if(props.reviewed)
    return (
      <div>
        {console.log(props.reviewed+'reviewed',props.label.split('+')[0])}
        <StarRatings
          rating={rate}
          numberOfStars={5}
          starDimension={30}
          starSpacing={0}
          starRatedColor={'rgb(253, 236, 1)'}
          starEmptyColor={'rgb(109, 122, 130)'}
          name={props.label}
          />
        <DoneAllIcon/>
      </div>
    )
    else
    return (
      <div>
        {console.log(props.reviewed+'Not reviewed',props.label.split('+')[0])}
        <StarRatings
          rating={rate}
          numberOfStars={5}
          changeRating={handleRating}
          starDimension={30}
          starSpacing={0}
          starRatedColor={'rgb(253, 236, 1)'}
          starEmptyColor={'rgb(109, 122, 130)'}
          starHoverColor={'rgb(253, 1, 1)'}
          name={props.label}
        />
        {done?<DoneAllIcon/>:<CancelIcon/>}
      </div>
    )
}
export {StarRating}