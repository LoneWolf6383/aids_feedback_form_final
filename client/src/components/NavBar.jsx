import React from 'react'
import { Nav, Navbar, Container,Button, InputGroup } from 'react-bootstrap'
import { ThemeContext, themes } from '../Themes/themeContext';


export const NavBar = () => {
    const [darkMode, setDarkMode] = React.useState(true);
    return (
        <Navbar collapseOnSelect expand={false} bg="dark" variant='dark' >
            <Container>
                <Navbar.Brand href='/'>Artificial Intelligence And DataScience Dept.</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="me-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/feedback">Feed Back form</Nav.Link>
                            <Nav.Link href="link-1">Repository</Nav.Link>
                            <Nav.Link href="link-2">News</Nav.Link>
                            <Nav.Link>
                            <InputGroup>
                                <ThemeContext.Consumer>
                                    {({ changeTheme }) => (
                                        <Button
                                            className='btn btn-danger'
                                        color="link"
                                        onClick={() => {
                                        setDarkMode(!darkMode);
                                        changeTheme(darkMode ? themes.light : themes.dark);
                                        }}
                                    >Switch Theme
                                        <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                                        {/* <span className="d-lg-none d-md-block">Switch mode</span> */}
                                    </Button>
                                    )}
                                </ThemeContext.Consumer>
                                </InputGroup>    
                            </Nav.Link>
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}
