import React from "react";
import Card from "../UI/Card";
// import { Navbar, Nav } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navigation = () => {
    return (

        <Navbar className="navbar-container" bg="dark" variant="dark">
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#scores">
                    {/* <FontAwesomeIcon icon={solid("futbol")} /> */}
                    Scores</Nav.Link>
                <Nav.Link href="#favourites">Favourites</Nav.Link>
                <Nav.Link href="#news">News</Nav.Link>
            </Nav>
        </Navbar>

    )
}


export default Navigation