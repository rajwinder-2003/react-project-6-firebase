import React , {useState, useContext} from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";
import {Link} from "react-router-dom";
import { UserContaxt } from "../context/UserContaxt";

const Header = () => {
    const contaxt = useContext(UserContaxt);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen)

    return(
       
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to='/' className="text-white">LCO gitfire app</Link></NavbarBrand>
                <NavbarText className="text-white">{
                    contaxt.user?.email ? contaxt.user.email : ""
                }</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    {
                        contaxt.user ? (
                            <NavItem>
                                <NavLink onClick={() =>{contaxt.setUser(null)}} className="text-white"> Logout </NavLink>
                            </NavItem>
                        ) : ( 
                           <>
                                <NavItem>
                                    <NavLink tag={Link} to='/signup' className="text-white"> Signup </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/signin' className="text-white"> Signin </NavLink>
                                </NavItem>
                            </>
                        )
                    }
                   
                   
                </Nav>
            </Collapse>
        </Navbar>
       
    )
};

export default Header;