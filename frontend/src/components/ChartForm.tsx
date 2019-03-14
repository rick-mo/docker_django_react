import * as React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

const ChartForm: React.FC = () => {
  const [ titleState, setTitleState ] = React.useState<string>('')
  const [ rowTitleState, setRowTitleState ] = React.useState<string>('')
  const [ columnTitleState, setColumnTitleState ] = React.useState<string>('')

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
      <p>title:
        <input type="text" onChange={(e) => setTitleState(e.target.value)} />
      </p>
      <p>row_title:
        <input type="text" onChange={(e) => setRowTitleState(e.target.value)} />
      </p>
      <p>column_title:
        <input type="text" onChange={(e) => setColumnTitleState(e.target.value)} />
      </p>
      <Button onClick={() => handlePost()}>post</Button>
    </div>
  )
}

export default ChartForm;