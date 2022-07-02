import React from 'react'
import { Banner } from '../components/banner'
import { GenerateCOFeedback } from '../components/generateCOFeedback'
import { NavBar } from '../components/NavBar'
import {Tab,Row,Col,Nav} from 'react-bootstrap'
import { AddCourse } from '../components/addCourse'
export const FacultyDashboard = () => {
  return (
      <div>
          <NavBar />
          <Banner />
          <div style={{ backgroundColor: '',height:'100%',width:'100%' }}>
          <h5 style={{
            textAlign: 'center',
            margin: '20px',
            textDecoration: 'overline underline black solid 2px',
            zoom: '150%',
            fontFamily: 'Lucida Handwriting',
          }}>Faculty DashBoard</h5>
          </div>
          <div style={{color:'black'}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
              <Row>
                <Col sm={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Generate Course CO Feedback</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Add Course</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={7} style={{width:'80%',backgroundColor:''}}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <GenerateCOFeedback/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                     <AddCourse/>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
    </div>
  )
}
