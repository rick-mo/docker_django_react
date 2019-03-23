import * as React from 'react';
import Chart from './Chart';

interface IChartProps {
  id: number;
  title: string;
  row_title: string;
  column_title: string;
}

interface IChartsProps {
  charts: IChartProps[]
}

//props, itemの型
const ChartList = (props: IChartsProps) => {
  const chartList = props.charts!.map(item => ( // ! : Non-null assertion operator
    <Chart 
      key={item.id} 
      title={item.title} 
      rowTitle={item.row_title} 
      columnTitle={item.column_title}
    />
  ))

  return <div>{chartList}</div>
}

export default ChartList;
