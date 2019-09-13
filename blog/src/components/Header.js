import React, { Component } from 'react';
export class Header extends Component {
    render() {
        console.log("Render Header Component");
        return <nav className="navbar is-primary">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://dotnettips.info">
                    <h1>DNT Blog</h1>
                </a>
                <div className="navbar-burger burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/home">Home</a>
                    <a className="navbar-item" href="/posts">Posts</a>
                </div>
            </div>
        </nav>
    }
}