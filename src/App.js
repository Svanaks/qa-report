import React, { useState } from 'react';
import './App.css';
import { hgLogo, blueBackground } from './assets'
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
    // background: '#191c1f',
    color: 'black',
    display: "flex",
    flexDirection: "column",
  boxSizing: "border-box",
  // backgroundImage: `url(${blueBackground})`,
  // backgroundPosition: "revert",
  // backgroundSize: "cover",
  background: "rgb(25, 28, 31)"

}

  const headerStyle = {
    width: "100%",
    display: "flex",
    height: "20%",
    color: "white",
    backgroundImage: `url(${blueBackground})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderBottom: "solid 3px #d3b363"
  }

  
const logoStyle = {
  display: "flex",
  justifyContent: "flex-start",
  width: "30%",
  height: "auto",
  maxHeight: "200px",
  marginTop: "0.7em",
}


const titleStyle = {
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  paddingTop: "0.5em",
  fontSize: "2em",
  fontFamily: "roboto",
  textTransform: "capitalize",
  boxSizing: "border-box",
  color: "#d3b363",
  padding: "0 0.5em 0 0",
}

const rightWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
  width: "100%"
}


const dateStyle = {
  width: "20%",
  display: "flex",
  justifyContent: "flex-end",
  padding: "0 1em 0 0",
  boxSizing: "border-box",
  fontFamily: "roboto",
  color: "#d3b363"
}
const rowStyle = {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  // background: "yellow",
  height: "50px"
}

const row1Style = {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  // background: "yellow",
  margin: "70px 0px",
  height: "130px",
  justifyContent: "space-evenly"
}

const row2Style = {
  boxSizing: "border-box",
  width: "100%",
  display: "flex",
  flexDirection:"column",
  // background: "yellow",
  margin: "50px 0px",
  alignItems: "center"
}

const chartRowStyle = {
  boxSizing: "border-box",
  width: "calc(100% - 20px)",
  display: "flex",
  // background: "yellow",
  margin: "20px 10px",
  height: "300px"
}

const cardStyle = {
  display: "flex",
  width: "94%",
  // background: "#d3b363",
  padding: "0px 3%",
justifyContent: "space-between",
    borderRadius: "5px",
    boxSizing: "border-box",
    marginBottom: "10px",
    color: "#d3a650",
    border: "solid 1px"
    // boxShadow: "2px 2px 0px 0px rgb(126 126 126 / 20%)"
}

const labelRow2Style = {
  width: "100%",
  fontSize: "1em",
  fontWeight: "normal",
  display: "flex",
  alignItems: "center"
}


const dataRow2Style = {
  display: "flex",
  width: "100%",
  alignItems: "center",
  justifyContent: "flex-end",
  fontSize: "2em",
  fontWeight: "700"
}


const labelRowStyle = {
  width: "100%",
  textAlign: "center",
  fontSize: "1em",
  fontWeight: "normal",
  marginTop: "7px"
}


const dataRowStyle = {
  width: "100%",
  textAlign: "center",
  fontSize: "2em",
  fontWeight: "700",
  marginTop: "7%"
}


const mainCardStyle = {
  display: "flex",
  flexDirection: "column",
  width: "31%",
  // background: "#d3b363",
  // margin: "0px 3%",
    borderRadius: "5px",
    padding: "4px",
    height: "110%",
    alignItems: "center",
    boxSizing: "border-box",
    // boxShadow: "2px 2px 0px 0px rgb(126 126 126 / 20%)"

    color: "#d3a650",
    border: "solid 1px"
}


const mainLabelRowStyle = {
  width: "100%",
  textAlign: "center",
  fontSize: "1em",
  fontWeight: "normal",
  marginTop: "7px"
}


const mainDataRowStyle = {
  width: "100%",
  textAlign: "center",
  fontSize: "2em",
  fontWeight: "700",
  marginTop: "7%"
}

const prioLabelRowStyle = {
  width: "100%",
  textAlign: "left",
  fontWeight:"500",
  fontSize: "1.2em"
}


const dataLabelRowStyleLeft = {
  width: "100%",
  textAlign: "center",
  fontSize:"2.5em",
  marginTop: "2px",
  fontWeight:"700"
}

const dataRowStyleLeft = {
  width: "100%",
}


const printButtonStyle = {
  background: "#2196f3",
  color: "white",
  border: "none",
  padding: "10px",
  marginTop: "10px"
}

const flexContainer = {
  display: "flex",
}

const actionsArea = {
  marginLeft: "1%",
  marginTop: "1%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end"
}

const inputRow = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  padding: "10px 0px",
  boxSizing: "border-box"
}

const rowPrio = {
  display: "flex",
  flexDirection: "row"
}

const colPrio = {
  display: "flex",
  flexDirection: "column",
  width: "18%",
  margin: "0 2.5% 0 0"
}

const withMargin = {
  margin: "10px 0"
}

const flexCol = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center"
}

const flexRow = {
  display: "flex",
  flexDirection: "row",
  width: "94%",
  // border: "solid 3px grey",
  borderRadius: "5px",
  justifyContent: "space-between"
  // boxShadow: "2px 2px 0px 0px rgb(126 126 126 / 20%)"
}

const campainHeader = {
  marginBottom: "30px",
  fontSize: "1.5em",
  color: "#d3a650"
}



function App() {
  const [autoTestNumberValue, setAutoTestNumberValue] = useState(0);
  
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
const yyyy = today.getFullYear();
let mm = today.getMonth() + 1; // Months start at 0!
let dd = today.getDate();

if (dd < 10) dd = '0' + dd;
if (mm < 10) mm = '0' + mm;

const formattedToday = dd + '-' + mm + '-' + yyyy;

  const date = formattedToday;
  const title = "Rapport hebdo QA";
  const newAutoTestsNumber = 2;
  const newUnitTestNumber = 9;
  const bugFromCampainNumber = 7;
  const campainTestBugsPrio = [1, 2, 3, 1, 3, 3, 3];
  const avgPercentTestsAutoPassed = "97%";
  const weeklyNewBugs = 16;
  const weeklyFixedBugs = 13;

  const numberP0 = campainTestBugsPrio.filter(prio => prio === 0).length;
  const numberP1 = campainTestBugsPrio.filter(prio => prio === 1).length;
  const numberP2 = campainTestBugsPrio.filter(prio => prio === 2).length;
  const numberP3 = campainTestBugsPrio.filter(prio => prio === 3).length;
  const numberP4 = campainTestBugsPrio.filter(prio => prio === 4).length;

  const MainCard = ({label, data, width, height, margin}) => {
    return (
    <div style={mainCardStyle} width={width} height={height} margin={margin}>
      <div className='label' style={mainLabelRowStyle}>{label}</div>
      <div style={mainDataRowStyle}>{data}</div>
    </div>
  )}

  const Card = ({label, data, width, height, margin}) => {
    return (
    <div style={cardStyle} width={width} height={height} margin={margin}>
      <div className='label' style={labelRow2Style}>{label}</div>
      <div style={dataRow2Style}>{data}</div>
    </div>
  )}

  const PrioCard = ({label, data, width, height, margin, background}) => {
    return (
      <div className="prioCard" style={{width, height, margin, display: "flex", borderRadius: "5px", alignItems: "center", background, boxSizing:"border-box", flexDirection: "column", textAlign: "center", padding: "10px"}} >
        <div className='label' style={prioLabelRowStyle}>{label}</div>
        <div style={dataLabelRowStyleLeft}>{data}</div>
      </div>
  )}


  const Row = ({children}) => {
    return (
      <div style={rowStyle}>
        {children}
      </div>
    )
  }

  const Row1 = ({children}) => {
    return (
      <div style={row1Style}>
        {children}
      </div>
    )
  }

  const Row2 = ({children}) => {
    return (
      <div style={row2Style}>
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
    <div style={flexContainer}>
     
      <div id="divToPrint" style={containerStyle}>
        <div style={headerStyle}>
        <div style={logoStyle}>
            <img src={hgLogo} width="200px" />
          </div> 
          <div style={rightWrapper}>
            <div style={dateStyle}>{date}</div>
            <div style={titleStyle}>{title}</div>
          </div>
         
         
        </div>

        <Row1>
          <MainCard label="Nouveaux bugs" data={weeklyNewBugsValue} width={"50%"} height={"50px"}/>
          <MainCard label="Bugs corrigés" data={weeklyFixedBugsValue} width={"50%"} height={"50px"}/>
        </Row1>

        <Row2>
          <Card label="Nouveaux tests unitaires" data={newUnitTestNumberValue} height={"50px"}/>
          <Card label="Nouveaux tests autos" data={newAutoTestsNumberValue} height={"50px"}/>
          <Card label="Stabilité tests autos" data={avgPercentTestsAutoPassedValue} height={"50px"}/>
        </Row2>

        <Row>
          <div style={flexCol}>
            <div style={campainHeader}>Bugs remontés par la campagne : {campainTestBugsPrioValue}</div>
            <div style={flexRow}>
              <PrioCard label="P0" data={numberP0Value} height={"140px"} width={"19%"} background="#e12311"/>
              <PrioCard label="P1" data={numberP1Value} height={"140px"} width={"19%"} background="#eb8728"/>
              <PrioCard label="P2" data={numberP2Value} height={"140px"} width={"19%"} background="#e9dd3a"/>
              <PrioCard label="P3" data={numberP3Value} height={"140px"} width={"19%"} background="#c0e93a"/> 
              <PrioCard label="P4" data={numberP4Value} height={"140px"} width={"19%"} background="#3ae9b7"/> 
            </div>
          
          </div>

        </Row>

        {/* <ChartRow>
          <Card label="New auto tests" data="test1" width={"50%"} height={"300px"}/>
          <Card label="test2" data="" width={"50%"} height={"300px"}/>
        </ChartRow> */}
      </div>

      <div style={actionsArea}>
        <div>
          <div style={inputRow}>       
            <label for="autoTestNumber">Nombre de bugs hebdomadaire</label>
            <input name="autoTestNumber" type="text" value={weeklyNewBugsValue} onChange={e => setWeeklyNewBugsValue(e.target.value)} />
          </div>

          <div style={inputRow}>
            <label for="autoTestNumber">Nombre de bugs corrigés</label>
            <input name="autoTestNumber" type="text" value={weeklyFixedBugsValue} onChange={e => setWeeklyFixedBugsValue(e.target.value)} />
          </div>

          <div style={inputRow}>
            <label for="autoTestNumber">Nombre de nouveaux tests unitaires</label>
            <input name="autoTestNumber" type="text" value={newUnitTestNumberValue} onChange={e => setNewUnitTestNumberValue(e.target.value)} />
          </div>

          <div style={inputRow}>
            <label for="autoTestNumber">Auto Test Numbers</label>
            <input name="autoTestNumber" type="text" value={newAutoTestsNumberValue} onChange={e => setNewAutoTestNumberValue(e.target.value)} />
          </div>

          <div style={inputRow}>
            <label for="autoTestNumber">Pourcentage de tests automatiques qui passent</label>
            <input name="autoTestNumber" type="text" value={avgPercentTestsAutoPassedValue} onChange={e => setAvgPercentTestsAutoPassedValue(e.target.value)} />
          </div>

          <div style={inputRow}>
            <label for="autoTestNumber">Bugs remontés par la campagne</label>
            <input name="autoTestNumber" type="text" value={campainTestBugsPrioValue} onChange={e => setCampainTestBugsPrioValue(e.target.value)} />
          </div>

          <div style={withMargin}>Répartition prios bugs campagne</div>
          <div>
            <div style={rowPrio}>
              <div style={colPrio}>
                <label for="autoTestNumber">P0</label>
                <input name="autoTestNumber" type="text" value={numberP0Value} onChange={e => setNumberP0Value(e.target.value)} />
              </div>
              <div style={colPrio}>
                <label for="autoTestNumber">P1</label>
                <input name="autoTestNumber" type="text" value={numberP1Value} onChange={e => setNumberP1Value(e.target.value)} />
              </div>
              <div style={colPrio}>
                <label for="autoTestNumber">P2</label>
                <input name="autoTestNumber" type="text" value={numberP2Value} onChange={e => setNumberP2Value(e.target.value)} />
              </div>
              <div style={colPrio}>
                <label for="autoTestNumber">P3</label>
                <input name="autoTestNumber" type="text" value={numberP3Value} onChange={e => setNumberP3Value(e.target.value)} />
              </div>
              <div style={colPrio}>
                <label for="autoTestNumber">P4</label>
                <input name="autoTestNumber" type="text" value={numberP4Value} onChange={e => setNumberP4Value(e.target.value)} />
              </div>
            </div>
          </div>  
        </div>
        <div>
          <button onClick={printDocument} style={printButtonStyle}>Exporter en PDF</button>
        </div>
      </div>
    </div>
  );
}

export default App;
