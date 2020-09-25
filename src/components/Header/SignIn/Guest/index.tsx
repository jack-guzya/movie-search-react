import React, { useState, Dispatch, SetStateAction } from 'react';
import { Button, TextField } from '@material-ui/core';
// Styles
// import s from './Guest.module.css';

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
      <>
        <TextField label="Login" value={login} onChange={(e) => setLogin(e.currentTarget.value)} />
        <Button variant="outlined" color="primary" type="submit">
          Sign In
        </Button>
      </>
    </form>
  );
};

export default Guest;