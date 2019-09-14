import React, { Component } from 'react';
import { Post } from './Post';
import { ActionButton } from './ActionButton';
export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { title: "Post1", body: "Hello" },
                { title: "Post2", body: "Hello" },
                { title: "Post3", body: "Hello" },
                { title: "Post4", body: "Hello" }
            ],
            showSpan: false
        }
    }

    sort = () => {
        this.setState({ posts: this.state.posts.reverse(), showSpan: true })
    }

    getMessageElement() {
        let div = <div id="boxDiv" className="box">
            Hello
        </div>
        return this.state.showSpan ? <>{div}</> : div;
    }

    render() {
        return <>
            <h1 className="title">Latest posts</h1>
            <div className="box">
                <ActionButton text="Sort" callback={this.sort} />
            </div>
            {this.getMessageElement()}
            {this.state.posts.map((post, index) => {
                return <Post post={post} key={index} />
            })}
        </>
    }
}