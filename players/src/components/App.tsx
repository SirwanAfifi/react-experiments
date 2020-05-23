import React, { useState, useEffect } from "react";
import { userBuilder, JoinStatus, User } from "../models/User";
import styled from "styled-components";
import "../style.css";

export default function App() {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    setUsers(userBuilder.generateUsers());
  }, []);
  return (
    <Container>
      <SearchInput type="text" placeholder="Search Users..." />
      <UserContainer>
        {users &&
          users.map((user) => (
            <UserBox>
              <h1>{user.user}</h1>
              <p>
                <span>{JoinStatus[user.joinStatus]}</span>
                <span>{user.order}</span>
                <span>{user.time}</span>
              </p>
            </UserBox>
          ))}
      </UserContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;
`;

const SearchInput = styled.input`
  height: 40px;
  font-size: 20px;
  padding: 10px;
  width: 50%;
  margin: 20px;
`;

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;
const UserBox = styled.div`
  border: 1px solid #0b0b53;
  cursor: pointer;
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h1 {
    flex: 1;
    padding: 0 10px 0 10px;
  }
  p {
    background: #510e57;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    height: 30px;
    padding: 10px;
  }
  transition: all 0.2s ease-out;
  :hover {
    border: 1px solid #12056a;
    background: #efebe8;
    transform: scale(1.03);
  }
`;
