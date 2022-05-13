/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
export const Banner = () => {
    return (

        <div style={{
            backgroundColor:'#0088ff'
        }}>
            <img
            src={require('../images/mepcoBanner.jpg')}
            style={{
                backgroundColor: '#0088ff',
                width: '100%',
            }}/>
        </div>
    )
}