import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends Component {

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper #00acc1 cyan darken-1">
                        <div className="container">
                            <a href="/" className="brand-logo">BitBook</a>
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">list</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/">Feed</Link></li>
                                <li><Link to='/people'>People</Link></li>
                                <li><Link to="/profile">Profile</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to='/people'>People</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        )
    }
}