class Users extends React.Component {
  render() {
    var users = ["User1", "User2", "User3"];
    return (
      <ul>
        {users.map(user => (
          <li>{user}</li>
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<Users />, document.getElementById("app"));
