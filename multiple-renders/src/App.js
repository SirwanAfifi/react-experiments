import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState();

  const data = [
    { id: 1, name: "User1", age: 30 },
    { id: 2, name: "User2", age: 35 },
    { id: 3, name: "User3", age: 36 },
  ];

  return (
    <div className="App">
      <table className="table" key={Math.random() * 30}>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Age</td>
          <td>Op</td>
        </tr>
        {data.map(user => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>
              <button onClick={_ => {
                setCurrentUser(user);
                console.log(user)
              }}>Details</button>
            </td>
          </tr>
        ))}
      </table>

      {currentUser && <Details currentUser={currentUser} />}
    </div>
  );
}

const Details = (props) => {
  return <div className="bg-info text-white p-2 text-left">
    <pre className="text-white">
      {JSON.stringify(props.currentUser, null, 2)}
    </pre>
  </div>
}

export default App;
