import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';

export default function Topbar() {
  const { user } = useGlobalContext();

  const logoutUser = () => {
    localStorage.removeItem('waterEmail');
  };
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/welcome">
            <span className="logo">Smart Water Meter</span>
          </Link>
        </div>
        {user ? (
          <div className="topRight">
            <div className="topbarIconContainer">
              <Link to="/analytics">
                <span className="logo">Analytics</span>
              </Link>
            </div>
            <div onClick={logoutUser} className="topbarIconContainer">
              <span className="logo">Logout</span>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
