import React, { Component } from 'react';
import { Typography, Card, Box, withStyles } from '@material-ui/core';
import { colors } from '@material-ui/core';
import VisualizationField from './VisualizationField';
import HelpCard from './HelpCard';
import ControlPanel from './ControlPanel';
import ChartView from './ChartView';

const RECT_SIZE = 3;
const SUSCEPTIBLE_COLOR = colors.grey[200];
const INFECTED_COLOR = colors.red[400];
const REMOVED_COLOR = colors.blue[400];

const styles = theme => ({
  root: {
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
    position: 'relative',
  },
  fieldContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  helpCardContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    opacity: 0.6,
    transition: 'opacity 200ms ease-in-out',
    '&:hover': {
      opacity: 1,
    },
  },
  controlPanelContainer: {
    position: 'absolute',
    right: 16,
    top: 16,
    opacity: 0.6,
    transition: 'opacity 200ms ease-in-out',
    '&:hover': {
      opacity: 1,
    },
  },
  chartViewContainer: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    opacity: 0.6,
    transition: 'opacity 200ms ease-in-out',
    '&:hover': {
      opacity: 1,
    },
  },
  madeByRoot: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    opacity: 0.6,
    maxWidth: 380,
    transition: 'opacity 200ms ease-in-out',
    '&:hover': {
      opacity: 1,
    },
  },
});

class App extends Component {
  fieldRef = React.createRef();
  state = {
    seedCalled: false,
    day: 0,
    zoom: 1.0,
    widthPoints: null,
    heightPoints: null,
    betta: 0.8,
    gamma: 0.2,
    dataS: [],
    dataI: [],
    dataR: [],
  };

  componentDidMount() {
    document.addEventListener('keydown', this.iterateWithSeed);

    const w = document.body.clientWidth;
    const h = document.body.clientHeight;

    const wPoints = Math.ceil(w / RECT_SIZE);
    const hPoints = Math.ceil(h / RECT_SIZE);

    this.setState({
      widthPoints: wPoints,
      heightPoints: hPoints,
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.iterateWithSeed);
  }

  iterateWithSeed = (e) => {
    if (e.keyCode !== 13) return;

    const field = this.fieldRef.current;

    if (!this.state.seedCalled) {
      const w = document.body.clientWidth;
      const h = document.body.clientHeight;

      const xPosition = Math.ceil(w / RECT_SIZE / 2);
      const yPosition = Math.ceil(h / RECT_SIZE / 2);

      field.addSeed(xPosition, yPosition);
      this.setState({seedCalled: true});
    }

    const [s, i, r] = field.tick();

    // refresh data every 21 days
    if (this.state.day % 21 === 0) {
      this.setState(prevState => ({
        day: prevState.day + 1,
        dataS: [...prevState.dataS, s],
        dataI: [...prevState.dataI, i],
        dataR: [...prevState.dataR, r],
      }));
    } else {
      this.setState(prevState => ({
        day: prevState.day + 1,
      }));
    }
  };

  onScroll = (e) => {
    let newZoom = this.state.zoom - e.deltaY / 100;
    newZoom = Math.min(3, Math.max(1, newZoom));
    this.setState({zoom: newZoom});
  };

  onChangeBetta = value => this.setState({betta: value});
  onChangeGamma = value => this.setState({gamma: value});
  onReset = () => {
    this.setState({
      seedCalled: false,
      day: 0,
      dataS: [],
      dataI: [],
      dataR: [],
    }, this.fieldRef.current.reset);
  };

  getMadeByWidget = () => {
    const {classes} = this.props;
    return <div className={classes.madeByRoot}>
      <Card>
        <Box px={2} py={1}>
          <Typography style={{fontSize: 14}}>
            Vizualizacijo lokalnega SIR modela je za izobraževalne namene ustvarila ekipa <a rel={'noopener noreferrer'} target='_blank' href={'https://zerodays.dev'}>Zerodays</a>.
          </Typography>
        </Box>
      </Card>
    </div>;
  };

  render() {
    const {classes} = this.props;

    return <div className={classes.root} onKeyDown={this.iterateWithSeed} onWheel={this.onScroll}>
      <div className={classes.fieldContainer}>
        {
          this.state.widthPoints == null ? null :
            <VisualizationField
              ref={this.fieldRef}
              widthPoints={this.state.widthPoints}
              heightPoints={this.state.heightPoints}
              rectSize={RECT_SIZE}
              susceptibleColor={SUSCEPTIBLE_COLOR}
              infectedColor={INFECTED_COLOR}
              removedColor={REMOVED_COLOR}
              betta={this.state.betta}
              gamma={this.state.gamma}
              zoom={this.state.zoom}
            />
        }
      </div>

      <div className={classes.helpCardContainer}>
        <HelpCard
          susceptibleColor={SUSCEPTIBLE_COLOR}
          infectedColor={INFECTED_COLOR}
          removedColor={REMOVED_COLOR}
        />
      </div>

      <div className={classes.controlPanelContainer}>
        <ControlPanel betta={this.state.betta}
                      gamma={this.state.gamma}
                      day={this.state.day}
                      onChangeBetta={this.onChangeBetta}
                      onChangeGamma={this.onChangeGamma}
                      onReset={this.onReset}
        />
      </div>

      <div className={classes.chartViewContainer}>
        <ChartView dataS={this.state.dataS}
                   dataI={this.state.dataI}
                   dataR={this.state.dataR}
        />
      </div>
      {this.getMadeByWidget()}
    </div>;
  }
}

export default withStyles(styles)(App);