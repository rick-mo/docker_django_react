import * as React from 'react';
import axios from 'axios';
import { TextField, Button } from '@material-ui/core';

const LoginPage: React.FC = () => {
  // TODO stateをまとめる
  const [ usernameState, setUsernameState ] = React.useState<string>('')
  const [ passwordState, setPasswordState ] = React.useState<string>('')

  // TODO バリデーション
  const handleLogin = () => {
    axios.post('http://localhost:8000/login/', {
      username: usernameState, 
      password: passwordState
    }).then(resp => {
      console.log(resp.data)
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <TextField 
        label="username"
        onChange={(e) => setUsernameState(e.target.value)}
      />
      <TextField 
        label="password" 
        onChange={(e) => setPasswordState(e.target.value)} 
      />
      <Button onClick={() => handleLogin()}>Login</Button>
    </div>
  )
}

export default LoginPage;