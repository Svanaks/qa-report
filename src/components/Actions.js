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
  hasCampain,
  setHasCampain,
  date,
  bestBugHunterValue,
  setBestBugHunterValue,
  bugHunterNumber,
  setBugHunterNumber,
  totalAutoTestsNumberValue,
  setTotalAutoTestNumberValue,
  totalUnitTestNumberValue,
  setTotalUnitTestNumberValue,
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
  openBugsValue,
  setWeeklyNewBugsValue,
  weeklyFixedBugsValue,
  setWeeklyFixedBugsValue,
  setOpenBugsValue,
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
  console.log('hasCampain2', hasCampain)
  return (
    <div>
      <div>
        <InputRow
          labelFor="bugsHebdo"
          name="bugsHebdo"
          label="Nombre de bugs hebdomadaire"
          value={weeklyNewBugsValue}
          onChange={setWeeklyNewBugsValue}
          type="text"
        />

        <InputRow
          labelFor="bugsOpen"
          name="bugsOpen"
          label="Nombre de bugs ouverts"
          value={openBugsValue}
          type="text"
          onChange={setOpenBugsValue}
        />

        <InputRow
          labelFor="fixedBugs"
          name="fixedBugs"
          label="Nombre de bugs corrigés"
          value={weeklyFixedBugsValue}
          type="text"
          onChange={setWeeklyFixedBugsValue}
        />

        <InputRow
          labelFor="newUnitTests"
          name="newUnitTests"
          label="Nombre de nouveaux tests unitaires"
          value={newUnitTestNumberValue}
          type="text"
          onChange={setNewUnitTestNumberValue}
        />

        <InputRow
          labelFor="totalUnitTests"
          name="totalUnitTests"
          label="Nombre total de tests unitaires"
          value={totalUnitTestNumberValue}
          type="text"
          onChange={setTotalUnitTestNumberValue}
        />

        <InputRow
          labelFor="autoTestNumber"
          name="autoTestNumber"
          label="Nombre de nouveaux tests autos"
          value={newAutoTestsNumberValue}
          type="text"
          onChange={setNewAutoTestNumberValue}
        />

        <InputRow
          labelFor="totalAutoTestNumber"
          name="totalAutoTestNumber"
          label="Nombre total de tests autos"
          value={totalAutoTestsNumberValue}
          type="text"
          onChange={setTotalAutoTestNumberValue}
        />

        <InputRow
          labelFor="avgTestStability"
          name="avgTestStability"
          label="Pourcentage de tests automatiques qui passent"
          value={avgPercentTestsAutoPassedValue}
          type="text"
          onChange={setAvgPercentTestsAutoPassedValue}
        />

        <InputRow
          labelFor="hasCampain"
          name="hasCampain"
          label="CAMPAGNE ?"
          hasCampain={hasCampain}
          type="checkbox"
          setHasCampain={setHasCampain}
        />

        <InputRow
          labelFor="campainBugNumber"
          name="campainBugNumber"
          label="Bugs remontés par la campagne"
          value={campainTestBugsPrioValue}
          type="text"
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

        <InputRow
          labelFor="bestBugHunter"
          name="bestBugHunter"
          label="Meilleur chasseur de bugs"
          value={bestBugHunterValue}
          onChange={setBestBugHunterValue}
        />

        <InputRow
          labelFor="bugHunterNumber"
          name="bugHunterNumber"
          label="Nombre de bugs trouvés par meilleur tester"
          value={bugHunterNumber}
          onChange={setBugHunterNumber}
        />
      </div>
      
      <div>
        <button onClick={printDocument} style={printButtonStyle}>Exporter en PDF</button>
      </div>
    </div>
  )
}

export default Actions;


