import React from 'react';
import AnyChart from 'anychart-react';
import anychart from 'anychart';

export default class Chart extends React.Component {

  constructor() {
    super();
    this.setState({ chart: 'stock' });
  }

  render() {
    const table = anychart.data.table();
    table.addData([
     ['2015-12-24', 511.53, 514.98, 505.79, 506.40],
     ['2015-12-25', 512.53, 514.88, 505.69, 507.34],
     ['2015-12-26', 511.83, 514.98, 505.59, 506.23],
     ['2015-12-27', 511.22, 515.30, 505.49, 506.47],
     ['2015-12-28', 510.35, 515.72, 505.23, 505.80],
     ['2015-12-29', 510.53, 515.86, 505.38, 508.25],
     ['2015-12-30', 511.43, 515.98, 505.66, 507.45],
     ['2015-12-31', 511.50, 515.33, 505.99, 507.98],
     ['2016-01-01', 511.32, 514.29, 505.99, 506.37],
     ['2016-01-02', 511.70, 514.87, 506.18, 506.75],
     ['2016-01-03', 512.30, 514.78, 505.87, 508.67],
     ['2016-01-04', 512.50, 514.77, 505.83, 508.35],
     ['2016-01-05', 511.53, 516.18, 505.91, 509.42],
     ['2016-01-06', 511.13, 516.01, 506.00, 509.26],
     ['2016-01-07', 510.93, 516.07, 506.00, 510.99],
     ['2016-01-08', 510.88, 515.93, 505.22, 509.95],
     ['2016-01-09', 509.12, 515.97, 505.15, 510.12],
     ['2016-01-10', 508.53, 516.13, 505.66, 510.42],
     ['2016-01-11', 508.90, 516.24, 505.73, 510.40],
    ]);
    const mapping = table.mapAs();
    mapping.addField('open', 1, 'first');
    mapping.addField('high', 2, 'max');
    mapping.addField('low', 3, 'min');
    mapping.addField('close', 4, 'last');
    mapping.addField('value', 4, 'last');
    const chart = anychart.stock();
    chart.plot(0).ohlc(mapping).name('ACME Corp.');
    chart.title('AnyStock Basic Sample');
    chart.container('root');
    chart.draw();

    const json = {
      type: 'stock',
      title: 'Stock Chart',
      width: 800,
      height: 600,
      instance: chart,
    };

    return (
      <div className="App">
        <AnyChart {...json} />
      </div>
    );
  }
}
