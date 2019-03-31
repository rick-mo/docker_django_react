import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import withRoot from '../withRoot';
import Contents from './Contents';
import Header from './Header';

const App: React.FC = () => {
  const [isLogged, setLogged] = useState<boolean>(false);

  return (
    <Router>
      <div>
        <Header isLogged={isLogged} setLogged={setLogged} />
        <Contents isLogged={isLogged} setLogged={setLogged} />
      </div>
    </Router>
  );
};

export default withRoot(App);
