import React from "react";
import styled, { css } from "styled-components";

export default () => {
  return (
    <App>
      <p>Using Styled Components</p>
    </App>
  );
};

const Common = css`
  text-align: center;
`;

const App = styled.h1`
  color: red;
  font-size: 2rem;
  ${Common}
  p: {
    font-size: 1.5rem;
    color: red;
  }
`;
