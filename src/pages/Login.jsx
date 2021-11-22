import React, { useContext, useState } from 'react';
import { axiosInstance } from '../config';
import { Context } from '../context/Context';

import { Link } from 'react-router-dom';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login = ({ history }) => {
  const paperStyle = {
    padding: 20,
    height: '73vh',
    width: 300,
    margin: '0 auto',
  };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0' };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      console.log(res.data.email);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data.email });
      history.push('/dashboard');
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter Your Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onCha
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            disabled={isFetching}
          >
            Sign in
          </Button>
        </form>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {' '}
          Don't have an account ?<Link to="/">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
