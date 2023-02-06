import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0px;
    box-sizing: border-box;
  `

  const InputRow = ({labelFor, name, label, value, onChange, type, setHasCampain, hasCampain}) => {
    // const [isChecked, setIsChecked] = useState(false)
    console.log('setHasCampain', setHasCampain)
    console.log('setHasCampain type', typeof setHasCampain)
    return (
      <Container>
        <label for={labelFor}>{label}</label>
        {type === "checkbox" && 
          <input name={name} type="checkbox" onChange={() => setHasCampain(!hasCampain)} checked={hasCampain} />
        }
        {type === "text" && 
          <input name={name} type="text" value={value} onChange={e => onChange(e.target.value)} /> 
        }
      </Container>
    )
  }

export default InputRow;


