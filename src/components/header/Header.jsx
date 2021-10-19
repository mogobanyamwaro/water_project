import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/welcome">
            <span className="logo">Water project</span>
          </Link>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Link to="/login">
              <span className="logo">Login</span>
            </Link>
          </div>
          <div className="topbarIconContainer">
            <Link to="/register">
              <span className="logo">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
