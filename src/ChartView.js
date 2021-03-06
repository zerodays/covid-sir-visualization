import React, { Component } from 'react';
import { Box, Card, colors, withStyles } from '@material-ui/core';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';

const styles = ({});

const SUSCEPTIBLE_COLOR = colors.grey[500];
const INFECTED_COLOR = colors.red[400];
const REMOVED_COLOR = colors.blue[400];

const options = {
  colors: [SUSCEPTIBLE_COLOR, INFECTED_COLOR, REMOVED_COLOR],
  title: {
    text: 'SIR vrednosti (osvežene vsakih 21 dni)',
  },
  animations: {
    enabled: false,
  },
  chart: {
    type: 'area',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    type: 'number',
    tickAmount: 8,
    labels: {
      formatter: value => `Dan ${value * 21}`,
    },
  },
  yaxis: {
    labels: {
      formatter: value => `${Math.round(100 * value)} %`,
    },
  },
  tooltip: {
    title: 'Dan',
  },
  markers: {
    size: 0,
  },
};

class ChartView extends Component {
  render() {
    return <Card>
      <Box pr={2} pt={2}>
        <Chart
          width={512}
          options={options}
          series={[{
            name: 'S - dovzetni',
            data: this.props.dataS,
          }, {
            name: 'I - okuženi',
            data: this.props.dataI,
          }, {
            name: 'R - imuni',
            data: this.props.dataR,
          }]}/>
      </Box>
    </Card>;
  }
}

ChartView.propTypes = {
  dataS: PropTypes.array.isRequired,
  dataI: PropTypes.array.isRequired,
  dataR: PropTypes.array.isRequired,
};

export default withStyles(styles)(ChartView);