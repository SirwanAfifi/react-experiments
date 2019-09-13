import React, { Component } from 'react';
import { Post } from './Post';
export class List extends Component {
    render() {
        return <>
            <h1 className="title">Latest posts</h1>
            {this.props.posts.map((post, index) => {
                return <Post post={post} key={index} />
            })}
        </>
    }
}