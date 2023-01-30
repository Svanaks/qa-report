import React, { useState } from 'react';
import './App.css';
import { hgLogo } from './assets'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const generatePDF = () => {

  const report = new jsPDF('portrait','px','a4');
  report.html(document.querySelector('#report')).then(() => {
      report.save('report.pdf');
  });
};

const printDocument= () => {
  const input = document.getElementById('divToPrint');
  html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      var width = pdf.internal.pageSize.getWidth();
      console.log(width)
      var height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    })
  ;
}

const containerStyle = {
    height: "297mm",
    width: "210mm",
    background: 'green',
    color: 'black',
    display: "flex",
    flexDirection: "column",
  boxSizing: "border-box",

}

  const headerStyle = {
    width: "100%",
    display: "flex",
    height: "20%",
    backgroundColor: "black",
    color: "white"
  }

  
const logoStyle = {
  display: "flex",
  justifyContent: "flex-start",
  width: "30%",
  height: "auto",
  maxHeight: "200px",
  marginTop: "1.5em",
  marginLeft: "0.5em"
}


const titleStyle = {
  width: "50%",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  paddingTop: "0.5em",
  fontSize: "2em",
  fontFamily: "roboto",
  textTransform: "uppercase",
  boxSizing: "border-box",
}


const dateStyle = {
  width: "20%",
  display: "flex",
  justifyContent: "flex-end",
  padding: "1em 1em 0 0",
  boxSizing: "border-box",
  fontFamily: "roboto",
}
const rowStyle = {
  boxSizing: "border-box",
  width: "calc(100% - 20px)",
  display: "flex",
  background: "yellow",
  margin: "20px 10px",
  height: "50px"
}

const chartRowStyle = {
  boxSizing: "border-box",
  width: "calc(100% - 20px)",
  display: "flex",
  background: "yellow",
  margin: "20px 10px",
  height: "300px"
}

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  width: "31%",
  background: "red",
  margin: "0px 3%",
}

const labelRowStyle = {
  width: "100%"
}


const dataRowStyle = {
  width: "100%"
}

function App() {
  const [inputValue, setInputValue] = useState('test');

  const date = "30-01-2023";
  const title = "Weekly QA Report";
  const newAutoTestsNumber = 2;
  const newUnitTestNumber = 9;
  const bugFromCampainNumber = 7;
  const campainTestBugsPrio = [1, 2, 3, 1, 3, 3, 3];
  const avgPercentTestsAutoPassed = "97%";
  const weeklyNewBugs = 16;
  const weeklyFixedBugs = 13;
  // Nombre de bugs campagne de tests / criticité
  // Nombre de nouveaux tests autos 
  // Nombre nouveaux tests unitaires
  // Pourcentage tests auto passés cette semaine
  // Nombre de bugs crées sur la semaine / répartition prios
  // Nombre bugs corrigés
  // Graph évolution stabilité mois
  // Pie chart répartition périmètre bugs admi/custom/agent/other

  const Card = ({label, data, width, height, margin}) => {
    return (
    <div style={cardStyle} width={width} height={height} margin={margin}>
      <div style={labelRowStyle}>{label} - </div>
      <div style={dataRowStyle}>{data}</div>
    </div>
  )}

  const Row = ({children}) => {
    return (
      <div style={rowStyle}>
        {children}
      </div>
    )
  }

  const ChartRow = ({children}) => {
    return (
      <div style={chartRowStyle}>
        {children}
      </div>
    )
  }

 

  return (
    <div>
    <div className="mb5">
        <button onClick={printDocument}>Print</button>
        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      </div>
      <div id="divToPrint" style={containerStyle}>
        <div style={headerStyle}>
          <div style={logoStyle}>
            <img src={hgLogo} width="200px" />
          </div> 
          <div style={titleStyle}>{title}</div>
          <div style={dateStyle}>{date}</div>
        </div>

        <Row>
          <Card label="New auto tests" data={newAutoTestsNumber} />
          <Card label="test2" data="test2" height={"50px"}/>
          <Card label="test3" data="test3" height={"50px"}/>
        </Row>

        <Row>
          <Card label="New auto tests" data="test1" height={"50px"}/>
          <Card label="test2" data="test2" height={"50px"}/>
          <Card label="test3" data="test3" height={"50px"}/>
        </Row>

        <ChartRow>
          <Card label="New auto tests" data="test1" width={"50%"} height={"300px"}/>
          <Card label="test2" data={inputValue} width={"50%"} height={"300px"}/>
        </ChartRow>
        

      </div></div>
    
  );
}

export default App;
