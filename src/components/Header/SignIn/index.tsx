import React, { useState, Dispatch, SetStateAction } from 'react';
import { Button, Menu, MenuItem, Grid, TextField } from '@material-ui/core';
import { AccountCircle, Menu as MenuIcon } from '@material-ui/icons';
// Styles
import s from './SignIn.module.css';

type TUserProps = {
  user: string;
  setUserName: Dispatch<SetStateAction<string | null>>;
};

const User: React.FC<TUserProps> = ({ user, setUserName }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setUserName(null);
    handleClose();
  };

  return (
    <Grid container>
      <AccountCircle />
      <h2 className={s.userName}>{user}</h2>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </Grid>
  );
};

type TGuestProps = {
  setUserName: Dispatch<SetStateAction<string | null>>;
};

const Guest: React.FC<TGuestProps> = ({ setUserName }) => {
  const [login, setLogin] = useState<string>('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserName(login);
  };

  return (
    <form onSubmit={handleSignIn}>
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField
            id="input-with-icon-grid"
            label="Login"
            value={login}
            onChange={(e) => setLogin(e.currentTarget.value)}
          />
        </Grid>
        <Button variant="contained" color="primary">
          Sign In
        </Button>
      </Grid>
    </form>
  );
};

const SignIn = () => {
  const [user, setUserName] = useState<string | null>('Frodo');

  return (
    <div className={s.signIn}>
      {user ? <User user={user} setUserName={setUserName} /> : <Guest setUserName={setUserName} />}
    </div>
  );
};

export default SignIn;
