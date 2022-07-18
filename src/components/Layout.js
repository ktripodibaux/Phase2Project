import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import Header from "./Header";
import styled from "styled-components";

function Layout (props) {
console.log(props.noSearch)
    const Styles = styled.div`
    .navbar{
        background-color: #191414;
    }

    .navbar-brand, .navbar-nav, .navbar-link, .nav {
        color: #bbb;
        font-size: 25px;

        &:hover {
            color:white;
        }
    }
    `
return(
    <>
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Discover Music</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto nav">
                    <Nav.Item className="nav"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item className="nav"><Nav.Link href="/search">Search</Nav.Link></Nav.Item>
                    <Nav.Item className="nav"><Nav.Link href="/music">My Music</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
    <Header props={props}>
    </Header>
    </>
)

}

export default Layout