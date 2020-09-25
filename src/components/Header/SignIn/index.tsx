import React, { useState } from 'react';
// Components
import Guest from './Guest';
import User from './User';
// Styles
import s from './SignIn.module.css';

const SignIn = () => {
  const [user, setUserName] = useState<string | null>('Frodo');

  return (
    <div className={s.signIn}>
      {user ? (
        <User userName={user} setUserName={setUserName} />
      ) : (
        <Guest setUserName={setUserName} />
      )}
    </div>
  );
};

export default SignIn;
