/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useState, useEffect ,useCallback} from 'react'
import { StarRating } from './starRating'
import {Box, Tab, Tabs} from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import { PolarAreaChart } from './GraphPlot/polarAreaChart'
export const DynTabs = () => {
  const [selectedTab, setSelectedTab] = useState('0')
  const [tabs, setTabs] = useState([])
  const [panels, setPanels] = useState([])
  const [tabIndex, setTabIndex] = useState(1)
  const [content, setContent] = useState([])
  
  const [reviewed, setReviewed] = useState(false)
  async function isReviewed(courseName) {
    try {
      var data = { 'username':window.sessionStorage.getItem('username'),'courseName': courseName }
        const { data: res } = await axios.post('isReviewed', data)
        if (res === true) {
          setReviewed(true)
        }else{
          setReviewed(false)
      }
    } catch (error) {
      console.log(error)  
      return false
    }
  }
  const generateTabs = useCallback(() => {
    var tabs_array = []
    var panels_array = []
    for (const key in content) {
      isReviewed(content[key][0])
      console.log('inside for '+reviewed)
      tabs_array.push({
        value: `${key}`,
        label: content[key][0], 
      })
      panels_array.push({
        value: `${key}`,
        child: () =>
        <div style={{ display: 'flex' }}>
            <div style={{ display:'inline-block',width:'100%'}}>
              <table style={{ flex: '1'}}>
            <tr>
              <td><h4>Feed Back Section</h4><br /></td>  
                </tr> 
                <tr style={{ listStyle: "none" }}>
                  {content[key][1].map((q) =>
                    <tr style={{ display: 'flex' }}>
                    <td style={{ flex: '1' }}><li>{q}</li></td>
                    <td style={{ flex: '1' }}>{console.log(content[key][0]+reviewed)}
                        <StarRating label={content[key][0] + "+" + q} reviewed={reviewed} /> 
                    </td>
                    </tr> 
                  )}
                </tr>
              </table>
            </div>
            <div style={{display:'inline-block',width:'55%'}}>
              <PolarAreaChart course={content[key][0]} />
            </div>
        </div>    
      })
      setTabIndex(key + 1)
    }
    setTabs(tabs_array)
    setPanels(panels_array)
  },[content, reviewed])

  
  
  useEffect(() => {
    generateTabs()
  }, [generateTabs])

  useEffect(() => {
    const getContent = async () => { 
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
