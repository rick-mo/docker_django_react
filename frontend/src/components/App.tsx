import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Button, { ButtonProps } from '@material-ui/core/Button';
import '../css/App.css';
import ChartPage from './ChartPage';
import UploadPage from './UploadPage';
import NotExistPage from './NotExistPage';
import TopPage from './TopPage';
import Header from './Header';

// interface MyButtonProps extends ButtonProps {
//   to: string;
//   replace?: boolean;
// }

// const MyButton = (props: MyButtonProps) => (
//   <Button {...props} component={Link as any} />
// )

class App extends React.Component<{}> {

  public render() {
    return (
      <Router>
        <div>
          <Header />
          {/* <MyButton to="/">Top</MyButton> */}
          <div>
            <Switch>
              <Route path="/" exact component={TopPage} />
              <Route path="/chart" exact component={ChartPage}/>
              <Route path="/upload" exact component={UploadPage}/>
              <Route exact component={NotExistPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
