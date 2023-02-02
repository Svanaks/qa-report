import React from 'react';
import InputRow from "../components/InputRow";

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

const printButtonStyle = {
  background: "#2196f3",
  color: "white",
  border: "none",
  padding: "10px",
  marginTop: "10px"
}

const Actions = ({
  numberP0Value,
  numberP1Value,
  numberP2Value,
  numberP3Value,
  numberP4Value,
  setNumberP0Value,
  setNumberP1Value,
  setNumberP2Value,
  setNumberP3Value,
  setNumberP4Value,
  weeklyNewBugsValue,
  setWeeklyNewBugsValue,
  weeklyFixedBugsValue,
  setWeeklyFixedBugsValue,
  newUnitTestNumberValue,
  setNewUnitTestNumberValue,
  newAutoTestsNumberValue,
  setNewAutoTestNumberValue,
  avgPercentTestsAutoPassedValue,
  setAvgPercentTestsAutoPassedValue,
  campainTestBugsPrioValue,
  setCampainTestBugsPrioValue,
  printDocument
}) => {
  return (
    <div>
      <div>
        <InputRow
          labelFor="bugsHebdo"
          name="bugsHebdo"
          label="Nombre de bugs hebdomadaire"
          value={weeklyNewBugsValue}
          onChange={setWeeklyNewBugsValue}
        />

        <InputRow
          labelFor="fixedBugs"
          name="fixedBugs"
          label="Nombre de bugs corrigés"
          value={weeklyFixedBugsValue}
          onChange={setWeeklyFixedBugsValue}
        />

        <InputRow
          labelFor="newUnitTests"
          name="newUnitTests"
          label="Nombre de nouveaux tests unitaires"
          value={newUnitTestNumberValue}
          onChange={setNewUnitTestNumberValue}
        />

        <InputRow
          labelFor="autoTestNumber"
          name="autoTestNumber"
          label="Nombre de nouveaux tests autos"
          value={newAutoTestsNumberValue}
          onChange={setNewAutoTestNumberValue}
        />

        <InputRow
          labelFor="avgTestStability"
          name="avgTestStability"
          label="Pourcentage de tests automatiques qui passent"
          value={avgPercentTestsAutoPassedValue}
          onChange={setAvgPercentTestsAutoPassedValue}
        />

        <InputRow
          labelFor="campainBugNumber"
          name="campainBugNumber"
          label="Bugs remontés par la campagne"
          value={campainTestBugsPrioValue}
          onChange={setCampainTestBugsPrioValue}
        />

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
  )
}

export default Actions;


