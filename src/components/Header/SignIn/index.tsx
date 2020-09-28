import React, { useState } from 'react';
// Components
import Guest from './Guest';
import User from './User';

const SignIn = () => {
  const [user, setUserName] = useState<string | null>('Frodo');

  return (
    <>
      {user ? (
        <User userName={user} setUserName={setUserName} />
      ) : (
        <Guest setUserName={setUserName} />
      )}
    </>
  );
};

export default SignIn;
