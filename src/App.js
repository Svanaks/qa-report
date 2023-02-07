import React, { useState } from 'react';
import './App.css';
import { hgLogo, blueBackground, trophy } from './assets'

import styled from 'styled-components';
import Row from "./components/Row";
import Actions from "./components/Actions";
import Card from "./components/Card";
import { formatDate, printDocument, shortFormatDate } from './utils/Utils';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title as TitleChart,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  width: ${props => props.width};
`
const Img = styled.img`
  margin: 0 10px 0px 0;
`
const Test = styled.div`
  width: 45%;
  height: 178px;
  background: #3a3d41;
  border-radius: 5px;
  padding: 5px;
  box-sizing: border-box;
`

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TitleChart,
  Tooltip,
  Legend
);

ChartJS.defaults.color = "#fff"

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      color: 'white'
    },
  },
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
      display: false
    },
    title: {
      display: true,
      position: "bottom",
      color: 'white',
      text: 'Stabilité des tests autos (%)'
    },
  },
  scales: {
    y: {
        min: 0,
        max: 100
    }
  },
};


const App = () => {
  const [hasCampain, setHasCampain] = useState();
  console.log('hasCampain', hasCampain)
  const [campainTestBugsPrioValue, setCampainTestBugsPrioValue] = useState(0);
  const [weeklyNewBugsValue, setWeeklyNewBugsValue] = useState(0);
  const [openBugsValue, setOpenBugsValue] = useState(0);
  const [weeklyFixedBugsValue, setWeeklyFixedBugsValue] = useState(0);
  const [newAutoTestsNumberValue, setNewAutoTestNumberValue] = useState(0);
  const [totalAutoTestsNumberValue, setTotalAutoTestNumberValue] = useState();
  const [newUnitTestNumberValue, setNewUnitTestNumberValue] = useState(0);
  const [totalUnitTestNumberValue, setTotalUnitTestNumberValue] = useState();
  const [avgPercentTestsAutoPassedValue, setAvgPercentTestsAutoPassedValue] = useState("0%");
  const [numberP0Value, setNumberP0Value] = useState(0);
  const [numberP1Value, setNumberP1Value] = useState(0);
  const [numberP2Value, setNumberP2Value] = useState(0);
  const [numberP3Value, setNumberP3Value] = useState(0);
  const [numberP4Value, setNumberP4Value] = useState(0);
  const [bestBugHunterValue, setBestBugHunterValue] = useState('Un nom');
  const [bugHunterNumber, setBugHunterNumber] = useState(0);

  const [dataSet1, setDataSet1] = useState('6,8,9,7,5,4,3');
  const [dataSet2, setDataSet2] = useState('1,2,3,14,12,11,4');
  const [dataSet3, setDataSet3] = useState('7,8,12,3,8,12,15');
  const [dataSet4, setDataSet4] = useState('78.2,79.9,87.5,54.3,91.3,87.6,84.3');


  const today = new Date();
  const date = formatDate(today);

  const thisWeekDate = shortFormatDate(today);
  const lastWeekDate = shortFormatDate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
  const twoWeekAgoDate = shortFormatDate(new Date(Date.now() - 14 * 24 * 60 * 60 * 1000));
  const threeWeekAgoDate = shortFormatDate(new Date(Date.now() - 21 * 24 * 60 * 60 * 1000));
  const fourWeekAgoDate = shortFormatDate(new Date(Date.now() - 28 * 24 * 60 * 60 * 1000));
  const fiveWeekAgoDate = shortFormatDate(new Date(Date.now() - 35 * 24 * 60 * 60 * 1000));
  const sixWeekAgoDate = shortFormatDate(new Date(Date.now() - 42 * 24 * 60 * 60 * 1000));
  const title = "Rapport hebdo QA";

  const labels = [sixWeekAgoDate, fiveWeekAgoDate, fourWeekAgoDate, threeWeekAgoDate, twoWeekAgoDate, lastWeekDate, thisWeekDate];
  const labels2 = [sixWeekAgoDate, fiveWeekAgoDate, fourWeekAgoDate, threeWeekAgoDate, twoWeekAgoDate, lastWeekDate, thisWeekDate];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Nouveaux bugs',
        data: dataSet1 ? dataSet1.split(',') : null,
        borderColor: 'rgb(225, 35, 17)',
        backgroundColor: 'rgba(225, 35, 17, 0.5)',
      },
      {
        label: 'Bugs ouverts',
        data: dataSet2 ? dataSet2.split(',') : null,
        borderColor: 'rgb(255, 152, 0)',
        backgroundColor: 'rgba(255, 152, 0, 0.5)',
      },
      {
        label: 'Bugs corrigés',
        data: dataSet3 ? dataSet3.split(',') : null,
        range: [0, 100],
        borderColor: 'rgb(29, 255, 14)',
        backgroundColor: 'rgba(29, 255, 14, 0.5)',
      },
    ],
  };

  const data2 = {
    labels: labels2,
    datasets: [
      {
        data: dataSet4 ? dataSet4.split(',') : null,
        borderColor: 'rgb(255, 235, 59)',
        backgroundColor: 'rgba(255, 235, 59, 0.5)',
      }
    ],
  };

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
          <Card hasIconBug={true} labelFontSize="1.2em" fontSize="3em" dataMargin="10px" dataJustifyContent="center" label="Nouveaux bugs" data={weeklyNewBugsValue} width={"29%"} height={"120%"} padding="4px" alignItems="center" boxSizing="border-box" flexDirection="column" />
          <Card hasIconBug={true} labelFontSize="1.2em" fontSize="3em" dataMargin="10px" dataJustifyContent="center" label="Bugs ouverts" data={openBugsValue} width={"29%"} height={"120%"} padding="4px" alignItems="center" boxSizing="border-box" flexDirection="column" />
          <Card hasIconCheck={true} labelFontSize="1.2em" fontSize="3em" dataMargin="10px" dataJustifyContent="center" label="Bugs corrigés" data={weeklyFixedBugsValue} width={"29%"} height={"120%"} padding="4px" alignItems="center" boxSizing="border-box" flexDirection="column" />
        </Row>

        <Row margin="80px 0px 50px 0px" justifyContent="center" flexDirection="column" alignItems="center" boxSizing="border-box">
          <Card dataDirection="row" dataAlignItems="center" padding="5px 3%" label="Nouveaux tests unitaires" labelFontSize="1.1em" data={newUnitTestNumberValue} totalUnitTestNumberValue={totalUnitTestNumberValue} height={"50px"} flexDirection="row" margin="5px 0" dataJustifyContent="flex-end" displayLabel="flex" labelJustifyContent="flex-start" labelAlignItems="center" labelMargin="0px" />
          <Card dataDirection="row" dataAlignItems="center" padding="5px 3%" label="Nouveaux tests autos" labelFontSize="1.1em" data={newAutoTestsNumberValue} totalAutoTestsNumberValue={totalAutoTestsNumberValue} height={"50px"} flexDirection="row" margin="5px 0" dataJustifyContent="flex-end" displayLabel="flex" labelJustifyContent="flex-start" labelAlignItems="center" labelMargin="0px" />
          <Card dataDirection="row" dataAlignItems="center" padding="5px 3%" label="Stabilité tests autos" labelFontSize="1.1em" data={avgPercentTestsAutoPassedValue} height={"50px"} flexDirection="row" margin="5px 0" dataJustifyContent="flex-end" displayLabel="flex" labelJustifyContent="flex-start" labelAlignItems="center" labelMargin="0px" />
        </Row>

        {!hasCampain &&
          <Row height="300px" margin="70px 0px 70px 0" justifyContent="space-evenly">
            <Test>
              <Line responsive={true} options={options} data={data} />
            </Test>
            <Test>
              <Line responsive={true} options={options2} data={data2} />
            </Test>
          </Row>
        }

        {hasCampain &&
        <div>
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
        <Row height="auto" margin="0% 0 20px 0">
          <div style={flexCol}>
            <CampainHeader justifyContent="flex-start" width="94%" alignItems="baseline">
              <Img src={trophy} width="40px" height="40px" />
              
              Meilleur chasseur de bugs sur la campagne : {bestBugHunterValue} - {bugHunterNumber}</CampainHeader>
          </div>
        </Row>
        </div>
        }
      </Container>

      <ActionsContainer>
        <Actions
          dataSet1={dataSet1}
          dataSet2={dataSet2}
          dataSet3={dataSet3}
          dataSet4={dataSet4}
          setDataSet1={setDataSet1}
          setDataSet2={setDataSet2}
          setDataSet3={setDataSet3}
          setDataSet4={setDataSet4}
          date={date}
          hasCampain={hasCampain}
          setHasCampain={setHasCampain}
          bestBugHunterValue={bestBugHunterValue}
          setBestBugHunterValue={setBestBugHunterValue}
          bugHunterNumber={bugHunterNumber}
          setBugHunterNumber={setBugHunterNumber}
          totalAutoTestsNumberValue={totalAutoTestsNumberValue}
          setTotalAutoTestNumberValue={setTotalAutoTestNumberValue}
          totalUnitTestNumberValue={totalUnitTestNumberValue}
          setTotalUnitTestNumberValue={setTotalUnitTestNumberValue}
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
          openBugsValue={openBugsValue}
          setOpenBugsValue={setOpenBugsValue}
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
