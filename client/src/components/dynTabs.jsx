/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState, useEffect ,useCallback} from 'react'
import EmojiRating from 'react-emoji-rating'
import { SubmitReview } from './submitReview'
import { StarRating } from './starRating'
import {Tab} from '@mui/material'
import {TabList,TabContext,TabPanel} from '@mui/lab'
export const DynTabs = () => {
  const [ratings, setRatings] = useState({})
  const [selectedTab, setSelectedTab] = useState('0')
  const [tabs, setTabs] = useState([])
  const [panels, setPanels] = useState([])
  const [tabIndex, setTabIndex] = useState(1)
  const [content, setContent] = useState([])
  const generateTabs = useCallback(() => {
    var tabs_array = []
    var panels_array = []
    for (const key in content) {
      tabs_array.push({
        value: `${key}`,
        label: content[key][0], 
      })
      panels_array.push({
        value: `${key}`,
        child: () => <div style={{ display: 'flex'}}>
          <table style={{ flex: '1'}}>
            <tr>
              <td><h4>Feed Back Section</h4><br /></td> 
            </tr>
            <tr>   
              <td>
                <div style={{ display: 'flex' }}> 
                  <p style={{ flex: '1' }}>Opinion On this course</p>
                  <div   style={{ flex: '1' ,textAlign:'right'}}><textarea id={content[key][0]} cols="30" rows="3"></textarea></div>
                </div>
              </td>
            </tr> 
            <tr style={{ listStyle: "none" }}>
              {content[key][1].map((q) =>
                <tr style={{ display: 'flex' }}>
                <td style={{ flex: '1' }}><li>{q}</li></td>
                <td style={{ flex: '1' }}>
                    <StarRating label={content[key][0] + "+" + q} onChange={ (val) =>{ setRatings(val)}} />
                </td>
                </tr> 
              )}
            </tr>
          </table>
          <div style={{
            flex: '1',
            textAlign: 'center',   
            position: 'relative',  
            top: '50%',
            zoom: '150%'
          }}>
            <br />
            <br />
            <br />
            <h6>Overall Feed Back</h6>
            <EmojiRating variant='classic' />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <SubmitReview data={''} ratings={ratings} />
          </div>
        </div>
      })
      setTabIndex(key + 1)
    }
    setTabs(tabs_array)
    setPanels(panels_array)
},[content,ratings])

  useEffect(() => {
    generateTabs()
  }, [generateTabs])
  useEffect(() => {
    const getContent = async () => { 
      var data = []
      const { data: res } = await axios.post('getFeedbackPattern')
      setContent(res)
    }
    getContent()
  }, [])
  
    
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setSelectedTab(newValue)
  }
    
  return (
    <div>
      <TabContext value={selectedTab}>
        <TabList onChange={handleChange}>
          {
            tabs.map(tab => (<Tab key={tab.value} label={tab.label} value={tab.value} />))
          }
        </TabList>
        {
          panels.map(panel => (
            <TabPanel key={panel.value} value={panel.value}>
               {panel.child()}   
            </TabPanel>
          ))
        }
      </TabContext>
      
    </div>
    )
}
