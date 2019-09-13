import React, { Component } from 'react';
export class Post extends Component {
    render() {
        console.log("Render Post Component");
        return <div className="panel">
            <p className="panel-heading">
                {this.props.post.title}
            </p>
            <section className="panel-block">
                <p>
                    {this.props.post.body}
                </p>
            </section>
        </div>
    }
}