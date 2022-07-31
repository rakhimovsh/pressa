import React, { useState } from 'react';
import './styles.scss';
import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../redux/actions/auth';
import axios from 'axios';

function Index() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { login, user } = useSelector(state => state.auth);

  const handleClick = () => {
      dispatch(adminLogin(username, password));

  };

  return (
    <form className="login__form">
      <h2 className="login__title">Tizimga kirish</h2>
      <TextField id="outlined-basic" label="Username" variant="outlined"
                 onChange={evt => setUsername(evt.target.value)}
                 style={{ marginBottom: '30px', width: '500px' }} />
      <TextField
        onChange={evt => setPassword(evt.target.value)}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        style={{ width: '500px', marginBottom: '30px' }}
      />
      <Button variant="contained" onClick={handleClick}>Contained</Button>
    </form>
  );
}

export default Index;