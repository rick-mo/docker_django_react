import * as React from 'react';
import Chart from './Chart';

//props, itemの型
const ChartList: React.FC = (props) => {
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
