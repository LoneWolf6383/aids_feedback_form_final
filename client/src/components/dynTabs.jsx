/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState, useEffect ,useCallback} from 'react'
import EmojiRating from 'react-emoji-rating'
import { SubmitReview } from './submitReview'
import { StarRating } from './starRating'
import {Box, Tab, Tabs} from '@mui/material'
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
        child: () => <div>
        <div style={{ display: 'flex'}}>
          <table style={{ flex: '1'}}>
            <tr>
              <td><h4>Feed Back Section</h4><br /></td> 
            </tr>
            <tr style={{ listStyle: "none" }}>
              {content[key][1].map((q) =>
                <tr style={{ display: 'flex' }}>
                <td style={{ flex: '1' }}><li>{q}</li></td>
                <td style={{ flex: '1' }}>
                    <StarRating label={content[key][0] + "+" + q} onChange={(val) => {
                      val[content[key][0]]['opinion'] = document.getElementById(content[key][0]).value
                      setRatings(val)
                    }} /> 
                </td>
                </tr> 
              )}
            </tr>
          </table>
          </div>
          <div style={{display:'flex',position:'relative',top:'40px',alignItems:'center',justifyContent:'center'}}>
              <SubmitReview style={{margin:'auto',justifyContent:'center',alignItems:'center'}} ratings={ratings}/>
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
    setSelectedTab(newValue)
  }
    
  return (
      <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto' }}>
      <TabContext   value={selectedTab}>
        <Tabs orientation='vertical' onChange={handleChange} sx={{ borderRight: 2, borderColor: 'divider' }}>
          {
            tabs.map(tab => (<Tab key={tab.value} label={tab.label} value={tab.value} />))
          }
        </Tabs>
        {
          panels.map(panel => (
            <TabPanel key={panel.value} value={panel.value}>
               {panel.child()}   
            </TabPanel>
          ))
        }
      </TabContext>
      </Box>
    )
}
