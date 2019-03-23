import * as React from 'react';
import axios from 'axios';
import ChartForm from './ChartForm';
import ChartList from './ChartList';

interface IChartState {
  id?: number;
  title?: string;
  row_title?: string;
  column_title?: string;
}

interface IChartsState {
  charts?: IChartState[]
}

const ChartPage: React.FC = () => {
  const initialState: IChartsState = {
    charts: [
      {
        id: 0,
        title: '',
        row_title: '',
        column_title: ''
      },
    ]
  }
  const [ chartState, setChartState ] = React.useState<IChartsState>(initialState)

  const getChart = () => {
    axios.get('http://localhost:8000/api/v1/chart')
      .then(res => {
        setChartState({ charts: res.data })
      })
      .catch(err => {
        console.log(err)
      });
  }

  React.useEffect(() => {
    getChart()
  }, []) //第二引数は[]で問題ないか

  return (
    <div>
      <ChartForm />
      {/* <ChartList charts={chartState.charts}/> */}
        {chartState.charts!.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <h3>{item.row_title}</h3>
            <h3>{item.column_title}</h3>
          </div>
        ))}
    </div>
  )
}

export default ChartPage;
