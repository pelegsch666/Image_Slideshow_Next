'use client';
import styled from 'styled-components';

interface ButtonProps {
  styledButton?: string;
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  border: 1px solid #000;
`;

const StyledButton = styled.button<ButtonProps>`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 20px;
`;
import React from 'react';

const OpeningPage = () => {
  return (
    <StyledContainer>
      <h1>OpeningPage</h1>
      <p>Ride down the spiral</p>
      <StyledButton styledButton="styledButton">Click me</StyledButton>
    </StyledContainer>
  );
};

export default OpeningPage;
