import React, { ReactNode, FC } from 'react';
import { Redirect } from 'react-router-dom';

interface Props {
  isLogged: boolean;
  children: ReactNode;
}

const Auth: FC<Props> = (props: Props) => {
  const { isLogged, children } = props;

  return (
    <React.Fragment>
      {isLogged ? children : <Redirect to="/login" />}
    </React.Fragment>
  );
};

export default Auth;
