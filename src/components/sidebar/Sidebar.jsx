import React, { useState } from 'react';
import './sidebar.css';
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 190,
  },
}));
function Sidebar() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  return (
    <div className="sidebar">
      <FormControl className={classes.formControl}>
        <InputLabel>Select Device ID</InputLabel>
        <Select onChange={(e) => setValue(e.target.value)}>
          <MenuItem value={10}>Device One</MenuItem>
          <MenuItem value={20}>Device Two</MenuItem>
          <MenuItem value={30}>Device Three</MenuItem>
          <MenuItem value={40}>Device Four</MenuItem>
          <MenuItem value={50}>Device Five</MenuItem>
          <MenuItem value={60}>Device Six</MenuItem>
          <MenuItem value={70}>Device Seven</MenuItem>
        </Select>
      </FormControl>
      {/* <p>{value}</p> */}
    </div>
  );
}

export default Sidebar;
