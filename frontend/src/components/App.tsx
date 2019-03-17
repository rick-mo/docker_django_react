import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import ChartPage from './ChartPage';
import UploadPage from './UploadPage';
import NotExistPage from './NotExistPage';
import TopPage from './TopPage';
import Header from './Header';
import LoginPage from './LoginPage';

class App extends React.Component<{}> {

  public render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="content">
            <Switch>
              <Route path="/" exact component={TopPage} />
              <Route path="/chart" exact component={ChartPage} />
              <Route path="/upload" exact component={UploadPage} />
              <Route path="/login" exact component={LoginPage} />
              <Route exact component={NotExistPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
