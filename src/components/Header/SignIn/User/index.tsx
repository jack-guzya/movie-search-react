import React, { useState, Dispatch, SetStateAction } from 'react';
// Material UI
import { Button, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
// Styles
import s from './User.module.css';

type TUserProps = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string | null>>;
};

const User: React.FC<TUserProps> = ({ userName, setUserName }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setUserName(null);
    handleMenuClose();
  };

  return (
    <div className={s.userContainer}>
      <Button aria-controls="user-menu" aria-haspopup="true" onClick={handleMenuOpen}>
        <AccountCircle className={s.icon} />
        <h2 className={s.userName}>{userName}</h2>
      </Button>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default User;
