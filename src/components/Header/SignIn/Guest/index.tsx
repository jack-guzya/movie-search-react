import React, { useState, Dispatch, SetStateAction } from 'react';
import { Button, TextField } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// Styles
// import s from './Guest.module.css';

type TGuestProps = {
  setUserName: Dispatch<SetStateAction<string | null>>;
};

const Guest: React.FC<TGuestProps> = ({ setUserName }) => {
  const [login, setLogin] = useState<string>('');
  const [isOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUserName(login);
  };

  return (
    <>
      <Button color="primary" onClick={handleClickOpen}>
        Sign In
      </Button>

      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="sign-in-modal">
        <DialogTitle id="sign-in-modal">Sign In</DialogTitle>

        <DialogContent>
          <TextField
            label="Login"
            value={login}
            onChange={(e) => setLogin(e.currentTarget.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button variant="outlined" color="primary" onClick={handleSignIn}>
            Sign In
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Guest;