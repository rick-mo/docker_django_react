import React from 'react';
import { HeatMapComponent, Inject, Legend, Adaptor, Tooltip } from '@syncfusion/ej2-react-heatmap';

const heatmapData = [
  [11, 14, 8, 5], 
  [12, 25, 9, 14],
  [4, 0, 2, 1], 
  [8, 12, 6, 0]
];

// heat bubble matrix chart
const SampleChart = () => {
  return (
    <HeatMapComponent
      titleSettings={{
        text: 'yeah',
        textStyle: {
          size: '15px',
        }
      }} 
      xAxis={{
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
      }}
      yAxis={{
        labels: ['会社A', '会社B', '会社C', '会社D']
      }}
      cellSettings = {{
        border: {
          width: 1
        },
        tileType: 'Bubble',
        bubbleType: 'Size'
      }}
      dataSource={heatmapData}>
      <Inject services={[Legend, Adaptor, Tooltip]} />
    </HeatMapComponent>
  )
}

export default SampleChart;
