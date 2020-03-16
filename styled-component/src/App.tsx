import React from "react";
import styled, { css } from "styled-components";

export default () => {
  return <App>Using Styled Components</App>;
};

const Common = css`
  text-align: center;
`;

const App = styled.h1`
  color: red;
  font-size: 2rem;
  ${Common}
`;
