import React, { useState } from 'react';
import './App.css';
import { hgLogo, blueBackground } from './assets'

import styled from 'styled-components';
import Row from "./components/Row";
import Actions from "./components/Actions";
import Card from "./components/Card";
import { formatDate, printDocument } from './utils/Utils';

const Container = styled.div`
    height: 297mm;
    width: 210mm;
    color: black;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: rgb(25, 28, 31);
`

const Header = styled.div`
    width: 100%;
    display: flex;
    height: 20%;
    color: white;
    background-image: url(${blueBackground});
    background-position: center;
    background-size: cover;
    border-bottom: solid 3px #d3b363;
  `


const logoStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  alignItems: "center"
}


const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5em;
  font-size: 2em;
  font-family: 'Montserrat', sans-serif;
  text-transform: capitalize;
  box-sizing: border-box;
  color: #d3b363;
`

const DateContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  color: #d3b363;
`

const FlexContainer = styled.div`
  display: flex,
`;

const ActionsContainer = styled.div`
  margin-left: 1%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const flexCol = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center"
}

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 94%;
  border-radius: 5px;
  justify-content: space-between;
`

const CampainHeader = styled.div`
  margin-bottom: 30px;
  font-size: 1.2em;
  color: #d3a650;
`

const App = () => {
  const [campainTestBugsPrioValue, setCampainTestBugsPrioValue] = useState(0);
  const [weeklyNewBugsValue, setWeeklyNewBugsValue] = useState(0);
  const [weeklyFixedBugsValue, setWeeklyFixedBugsValue] = useState(0);
  const [newAutoTestsNumberValue, setNewAutoTestNumberValue] = useState(0);
  const [newUnitTestNumberValue, setNewUnitTestNumberValue] = useState(0);
  const [avgPercentTestsAutoPassedValue, setAvgPercentTestsAutoPassedValue] = useState("0%");
  const [numberP0Value, setNumberP0Value] = useState(0);
  const [numberP1Value, setNumberP1Value] = useState(0);
  const [numberP2Value, setNumberP2Value] = useState(0);
  const [numberP3Value, setNumberP3Value] = useState(0);
  const [numberP4Value, setNumberP4Value] = useState(0);


  const today = new Date();
  const date = formatDate(today);
  const title = "Rapport hebdo QA";

  return (
    <FlexContainer>
      <Container id="divToPrint">
        <Header>
          <div style={logoStyle}>
            <img src={hgLogo} width="164px" height="173px" />
          </div>
        </Header>

        <Row height="130px" margin="0px 0px" justifyContent="center" flexDirection="column">
          <Title>{title}</Title>
          <DateContainer>{date}</DateContainer>
        </Row>

        <Row height="130px" margin="30px 0px 70px 0" justifyContent="space-evenly">
          <Card hasIconCheck={true} labelFontSize="1.2em" fontSize="3em" dataMargin="10px" dataJustifyContent="center" label="Nouveaux bugs" data={weeklyNewBugsValue} width={"31%"} height={"120%"} padding="4px" alignItems="center" boxSizing="border-box" flexDirection="column" />
          <Card hasIconBug={true} labelFontSize="1.2em" fontSize="3em" dataMargin="10px" dataJustifyContent="center" label="Bugs corrigés" data={weeklyFixedBugsValue} width={"31%"} height={"120%"} padding="4px" alignItems="center" boxSizing="border-box" flexDirection="column" />
        </Row>

        <Row margin="80px 0px 50px 0px" justifyContent="center" flexDirection="column" alignItems="center" boxSizing="border-box">
          <Card dataDirection="row" dataAlignItems="center" padding="5px 3%" label="Nouveaux tests unitaires" labelFontSize="1.1em" data={newUnitTestNumberValue} height={"50px"} flexDirection="row" margin="5px 0" dataJustifyContent="flex-end" displayLabel="flex" labelJustifyContent="flex-start" labelAlignItems="center" />
          <Card dataDirection="row" dataAlignItems="center" padding="5px 3%" label="Nouveaux tests autos" labelFontSize="1.1em" data={newAutoTestsNumberValue} height={"50px"} flexDirection="row" margin="5px 0" dataJustifyContent="flex-end" displayLabel="flex" labelJustifyContent="flex-start" labelAlignItems="center" />
          <Card dataDirection="row" dataAlignItems="center" padding="5px 3%" label="Stabilité tests autos" labelFontSize="1.1em" data={avgPercentTestsAutoPassedValue} height={"50px"} flexDirection="row" margin="5px 0" dataJustifyContent="flex-end" displayLabel="flex" labelJustifyContent="flex-start" labelAlignItems="center" />
        </Row>

        <Row height="auto" margin="10% 0 20px 0">
          <div style={flexCol}>
            <CampainHeader>Bugs remontés par la campagne : {campainTestBugsPrioValue}</CampainHeader>
            <FlexRow>
              <Card fontSize="3em" fontWeight="700" labelFontWeigh="600" labelFontSize="1.1em" labelMargin="10px 0 0 10px" dataJustifyContent="center" displayLabel="flex" labelJustifyContent="flex-start" flexDirection="column" padding="0" color="black" label="P0" data={numberP0Value} height={"140px"} width={"19%"} background="#e12311" borderRadius={"5px"} />
              <Card fontSize="3em" fontWeight="700" labelFontWeigh="600" labelFontSize="1.1em" labelMargin="10px 0 0 10px" dataJustifyContent="center" displayLabel="flex" labelJustifyContent="flex-start" flexDirection="column" padding="0" color="black" label="P1" data={numberP1Value} height={"140px"} width={"19%"} background="#eb8728" borderRadius={"5px"} />
              <Card fontSize="3em" fontWeight="700" labelFontWeigh="600" labelFontSize="1.1em" labelMargin="10px 0 0 10px" dataJustifyContent="center" displayLabel="flex" labelJustifyContent="flex-start" flexDirection="column" padding="0" color="black" label="P2" data={numberP2Value} height={"140px"} width={"19%"} background="#e9dd3a" borderRadius={"5px"} />
              <Card fontSize="3em" fontWeight="700" labelFontWeigh="600" labelFontSize="1.1em" labelMargin="10px 0 0 10px" dataJustifyContent="center" displayLabel="flex" labelJustifyContent="flex-start" flexDirection="column" padding="0" color="black" label="P3" data={numberP3Value} height={"140px"} width={"19%"} background="#c0e93a" borderRadius={"5px"} />
              <Card fontSize="3em" fontWeight="700" labelFontWeigh="600" labelFontSize="1.1em" labelMargin="10px 0 0 10px" dataJustifyContent="center" displayLabel="flex" labelJustifyContent="flex-start" flexDirection="column" padding="0" color="black" label="P4" data={numberP4Value} height={"140px"} width={"19%"} background="#3ae9b7" borderRadius={"5px"} />
            </FlexRow>
          </div>
        </Row>
      </Container>

      <ActionsContainer>
        <Actions
          numberP0Value={numberP0Value}
          numberP1Value={numberP1Value}
          numberP2Value={numberP2Value}
          numberP3Value={numberP3Value}
          numberP4Value={numberP4Value}
          setNumberP0Value={setNumberP0Value}
          setNumberP1Value={setNumberP1Value}
          setNumberP2Value={setNumberP2Value}
          setNumberP3Value={setNumberP3Value}
          setNumberP4Value={setNumberP4Value}
          printDocument={printDocument}
          weeklyNewBugsValue={weeklyNewBugsValue}
          setWeeklyNewBugsValue={setWeeklyNewBugsValue}
          weeklyFixedBugsValue={weeklyFixedBugsValue}
          setWeeklyFixedBugsValue={setWeeklyFixedBugsValue}
          newUnitTestNumberValue={newUnitTestNumberValue}
          setNewUnitTestNumberValue={setNewUnitTestNumberValue}
          newAutoTestsNumberValue={newAutoTestsNumberValue}
          setNewAutoTestNumberValue={setNewAutoTestNumberValue}
          avgPercentTestsAutoPassedValue={avgPercentTestsAutoPassedValue}
          setAvgPercentTestsAutoPassedValue={setAvgPercentTestsAutoPassedValue}
          campainTestBugsPrioValue={campainTestBugsPrioValue}
          setCampainTestBugsPrioValue={setCampainTestBugsPrioValue}
        />
      </ActionsContainer>
    </FlexContainer>
  );
}

export default App;
