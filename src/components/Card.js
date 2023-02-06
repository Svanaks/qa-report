import React from 'react';
import styled from 'styled-components';

import { bug, check } from '../assets'


const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: ${props => props.padding || '0px 3%'};
  margin: ${props => props.margin};
  justify-content: ${props => props.justifyContent};
  flex-direction: ${props => props.flexDirection};
  align-items: ${props => props.justifyContent};
  border-radius: ${props => props.borderRadius || "5px"};
  margin-bottom: ${props => props.marginBottom};
  color: ${props => props.color || "#d8af5a"};
  background: ${props => props.background || "#3a3d41"};
  width: ${props => props.width || '94%'};
  height: ${props => props.height || '50px'};
`

const Label = styled.div`
  width: 100%;
  text-align: center;
  font-size: ${props => props.labelFontSize};
  font-weight: ${props => props.labelFontWeigh};
  margin: ${props => props.labelMargin || "7px 0 0 0"};
  display: ${props => props.displayLabel};
  justify-content: ${props => props.labelJustifyContent};
  align-items: ${props => props.labelAlignItems}
`
const Data = styled.div`
  display: flex;
  width: ${props => props.labelWidth || '100%'};
  flex-direction: ${props => props.dataDirection};
  align-items: ${props => props.dataAlignItems};
  text-align: ${props => props.dataTextAlign || 'center'};
  font-size: ${props => props.fontSize || '2em'};
  font-weight: ${props => props.width || '700'};
  margin-top: ${props => props.dataMargin};
  justify-content: ${props => props.dataJustifyContent}
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  align-items: center;
`
const Img = styled.img`
  margin: 0 10px 0px 0;
`
const SmallTotal = styled.div`
  display: flex;
  font-size: 0.5em;
  align-items: flex-end;
  height: 100%;
  margin-left: 2px;
  margin-bottom: 5px;
`

const Card = ({ totalUnitTestNumberValue, totalAutoTestsNumberValue, hasIconCheck, hasIconBug, labelFontWeigh, labelMargin, dataDirection, dataAlignItems, labelFontSize, labelAlignItems, displayLabel, labelJustifyContent, dataJustifyContent, dataTextAlign, fontSize, dataMargin, fontWeight, labelWidth, color, label, data, width, height, margin, background, boxSizing, textAlign, padding, flexDirection, alignItems, justifyContent, borderRadius }) => {
  return (
    <Container
      width={width}
      height={height}
      margin={margin}
      boxSizing={boxSizing}
      background={background}
      textAlign={textAlign}
      padding={padding}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      borderRadius={borderRadius}
      color={color}
    >
      <Label labelFontWeigh={labelFontWeigh} labelMargin={labelMargin} labelFontSize={labelFontSize} labelAlignItems={labelAlignItems} displayLabel={displayLabel} labelJustifyContent={labelJustifyContent} width={labelWidth}>{label}</Label>
      <Data dataDirection={dataDirection} dataAlignItems={dataAlignItems} dataJustifyContent={dataJustifyContent} width={labelWidth} dataTextAlign={dataTextAlign} fontSize={fontSize} dataMargin={dataMargin} fontWeight={fontWeight}>
        {data}
      {totalUnitTestNumberValue && 
        <SmallTotal>(/{totalUnitTestNumberValue})</SmallTotal>
      }
      {totalAutoTestsNumberValue && 
        <SmallTotal>(/{totalAutoTestsNumberValue})</SmallTotal>
      }
      </Data>
      {hasIconBug &&
        <Wrapper>
          <Img src={bug} width="25px" height="25px" />
        </Wrapper>
      }
      {hasIconCheck &&
        <Wrapper>
          <Img src={check} width="25px" height="25px" />
        </Wrapper>
      }
    </Container>
  )
}

export default Card;


