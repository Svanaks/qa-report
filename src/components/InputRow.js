import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0px;
    box-sizing: border-box;
  `

  const InputRow = ({labelFor, name, label, value, onChange}) => {
    return (
      <Container>
        <label for={labelFor}>{label}</label>
        <input name={name} type="text" value={value} onChange={e => onChange(e.target.value)} />
      </Container>
    )
  }

export default InputRow;


