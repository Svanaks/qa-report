import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    height: ${props => props.height || '50px'};
    margin: ${props => props.margin || 0};
    justify-content: ${props => props.justifyContent};
    flex-direction: ${props => props.flexDirection};
    align-items: ${props => props.justifyContent};
  `


const Row = ({ children, height, margin, justifyContent, flexDirection, alignItems }) => {
  return (
    <Container height={height} margin={margin} justifyContent={justifyContent} flexDirection={flexDirection} alignItems={alignItems}>
      {children}
    </Container>
  )
}

export default Row;


