import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);
export const PolarAreaChart = (props) => {
    const [ratings, setRatings] = useState({})
    useEffect(() => {
        const getRatings = async () => {
            const data = { 'username': window.sessionStorage.getItem('username'), 'courseName': props.course }
            const res = await axios.post('/getRatings', data)
            setRatings(res.data)
        }
        getRatings()
    }, [props.course, ratings])
    const d = {
        labels: ['Q1','Q2','Q3','Q4','Q5'],
        datasets: [
            {
                label: props.course,
                data: ratings,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)'
                ],
                borderWidth: 1,
                borderAlign: 'inner',
            },
            ],
    }

    return <PolarArea data={d} />
}
