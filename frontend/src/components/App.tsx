import * as React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import '../css/App.css';
import ChartPage from './ChartPage';
import UploadPage from './UploadPage';

class App extends React.Component<{}> {

  public render() {
    return (
      <Router>
        <ul>
          <li><Link to="/chart">Chart</Link></li>
          <li><Link to="/upload">Upload</Link></li>
        </ul>
        <div>
          <Route path="/chart" exact component={ChartPage}/>
          <Route path="/upload" exact component={UploadPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
