import React from 'react'
import {Navbar,Nav, Container, NavDropdown} from 'react-bootstrap'
import {Route} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {logout} from '../actions/userActions'
import SearchBox from './SearchBox'


const Header = () => {

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const logoutHandler =() => {
        dispatch(logout())
    }

    const cname={
        fontFamily: "'Kaushan Script', cursive",
        textAlign: "center",
        marginLeft: "100px",
        fontSize: "35px"
    }
    const headstyle={
        backgroundColor: ""
    }
    const sbox={
        marginLeft: "50px"
    }
    const cartstyle={
        margin: "0px",
        padding: "5px",
        fontSize: "15px"
    }

    return (
        <header><div style={{backgroundColor: "#06055a"}}>
            <Navbar variant="dark" expand="lg">
                <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Route render={({history})=> <SearchBox history ={history}/>} />
                    
                    <LinkContainer to="/">
                        <Navbar.Brand ><div style={cname}>trust-SHOP</div></Navbar.Brand>
                    </LinkContainer>
                    <Nav className="ml-auto">
                    <LinkContainer to="/cart">
                        <Nav.Link><div style={cartstyle}><i className="fa fa-shopping-cart"/> Cart</div></Nav.Link>
                    </LinkContainer>
                    
                    <div style={cartstyle}>
                    {userInfo ? (
                            <NavDropdown title={userInfo.name} id="username">
                                <LinkContainer to="/profile">
                                    <NavDropdown.Item>
                                        Profile
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>  
                        ) : ( 
                        <LinkContainer to="/login">
                        <Nav.Link><i className="fa fa-user" /> Sign In</Nav.Link>
                        </LinkContainer>
                        )
                    }
                    {userInfo && userInfo.isAdmin && (
                        <NavDropdown title='admin' id="adminmenu">
                        <LinkContainer to="/admin/userlist">
                            <NavDropdown.Item>
                                Users
                            </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/productlist">
                            <NavDropdown.Item>
                                Products
                            </NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to="/admin/orderlist">
                            <NavDropdown.Item>
                                Orders
                            </NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>
                    )}
                    </div>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
                </div></header>
    )
}

export default Header
