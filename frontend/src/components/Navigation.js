import React, { Component } from 'react';
import { Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <div className="containerNavbar">
                <Navbar className="navbar justify-content-between">
                    <div>
                    <NavLink to="/" exact className="navLink" activeClassName="navLink-active">Home</NavLink>
                    <NavLink to="/createUser/1" className="navLink" activeClassName="navLink-active">Create</NavLink>
                    <NavLink to="/editUser/2" className="navLink" activeClassName="navLink-active">Edit</NavLink>
                    </div>
                    <Button className="button">Login</Button>
                </Navbar>
            </div>
        )
    }
}
