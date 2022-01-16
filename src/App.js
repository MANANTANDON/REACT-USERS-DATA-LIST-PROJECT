//Components Imports
import React, { useState } from 'react'
import { Form } from './Components/Form'
import { Users } from './Components/Users'

//Css Imports
import './App.css';

function App() {

  const [ allData, setAllData ] = useState([])

  const getDataFromFormComponent = recievedData => {
    setAllData(previous => {
      return[...previous, recievedData]
    })
  }

  return (
    <React.Fragment>
      <div className="App">
        <Form sendDataToAppComponent = {getDataFromFormComponent}/>
        <div className = 'userBody'>
          {
            allData.length === 0 ? 
            'no entries till now ;), type some !' :
            allData.map((obj, index) => {
              return <Users key = {index} user = {obj.name} birthday = {obj.birth}/>
            })
          }
        </div>
      </div>
    </React.Fragment>
    
  );
}

export default App;
