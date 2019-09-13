import React, { Component } from 'react';
export class AuthorList extends Component {
    render() {
        console.log("Render AuthorList Component");
        return <>
            <h1 className="title">Authors</h1>
            <ul className="list">
                {[{ title: "Vahid Nasiri" }, { title: "Sirwan Afifi" }]
                    .map((author, index) => <a href="/" className="list-item" key={index}>{author.title}</a>
                    )}
            </ul>
        </>
    }
}