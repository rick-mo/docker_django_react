import * as React from 'react';
import axios from 'axios';
import '../css/App.css';

interface IChartState {
  id?: number;
  title?: string;
  row_title?: string;
  column_title?: string;
}

interface IChartsState {
  charts?: IChartState[]
}

class App extends React.Component<IChartsState> {
  public state: IChartsState = {
    charts: [
      {
        id: 0,
        title: 'initial',
        row_title: '1st_row',
        column_title: '1st_column'
      },
    ]
  }

  componentDidMount() {
    this.getChart();
  }

  private getChart() {
    axios.get('http://localhost:8000/api/')
      .then(res => {
        this.setState({ charts: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  public render() {
    return (
      <div>
        {this.state.charts!.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.row_title}</h3>
            <h3>{item.column_title}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
