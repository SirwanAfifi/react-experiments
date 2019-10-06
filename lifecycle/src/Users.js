import React, { useState, useEffect } from 'react';

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Same as componentDidMount")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers({ users: data });
            })
    }, []);

    useEffect(() => {
        console.log("Same as componentDidUpdate")
    });

    useEffect(() => {
        return () => {
            console.log("Same as componentWillUnmount")
        }
    }, []);

    return (
        <div className="bg-info text-white p-2">
            {users &&
                <p>{JSON.stringify(users, null, 2)}</p>
            }
        </div>
    );
}