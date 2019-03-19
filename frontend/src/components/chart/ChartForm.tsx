import * as React from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core/';

const ChartForm: React.FC = () => {
  const [ titleState, setTitleState ] = React.useState<string>('')
  const [ rowTitleState, setRowTitleState ] = React.useState<string>('')
  const [ columnTitleState, setColumnTitleState ] = React.useState<string>('')

  // TODO バリデーション
  const handlePost = () => {
    console.log(titleState, rowTitleState, columnTitleState)
    axios.post('http://localhost:8000/api/v1/chart/', {
      title: titleState,
      row_title: rowTitleState,
      column_title: columnTitleState
    }).then(resp => {
      console.log(resp.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <TextField 
        label="Title" 
        onChange={(e) => setTitleState(e.target.value)} 
      />
      <TextField 
        label="Row_Title" 
        onChange={(e) => setRowTitleState(e.target.value)} 
      />
      <TextField 
        label="Column_Title" 
        onChange={(e) => setColumnTitleState(e.target.value)}
      />
      <Button onClick={() => handlePost()}>POST</Button>
    </div>
  )
}

export default ChartForm;