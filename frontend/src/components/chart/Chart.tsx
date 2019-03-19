import * as React from 'react';

// propsの型
const Chart: React.FC = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.rowTitle}</h3>
      <h3>{props.columnTitle}</h3>
    </div>
  )
}

export default Chart;
