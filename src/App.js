import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { colors } from '@material-ui/core';
import VisualizationField from './VisualizationField';

const RECT_SIZE = 3;

const styles = theme => ({
  root: {
    overflow: 'hidden',
    height: '100vh',
    width: '100vw',
  },
});

class App extends Component {
  fieldRef = React.createRef();
  state = {
    seedCalled: false,
    zoom: 1.0,
    widthPoints: null,
    heightPoints: null,
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

    console.log(wPoints, hPoints);
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

      field.addSeed(xPosition, yPosition); // TODO: seed position
      this.setState({seedCalled: true});
    }

    field.tick();
  };

  onScroll = (e) => {
    let newZoom = this.state.zoom - e.deltaY / 1000;
    newZoom = Math.min(3, Math.max(1, newZoom));
    this.setState({zoom: newZoom});
  };

  render() {
    const {classes} = this.props;
    return <div className={classes.root} onKeyDown={this.iterateWithSeed} onWheel={this.onScroll}>
      {
        this.state.widthPoints == null ? null :
          <VisualizationField
            ref={this.fieldRef}
            widthPoints={this.state.widthPoints}
            heightPoints={this.state.heightPoints}
            rectSize={RECT_SIZE}
            susceptibleColor={colors.grey[200]}
            infectedColor={colors.red[400]}
            removedColor={colors.blue[400]}
            gamma={0.1}
            betta={0.8}
            zoom={this.state.zoom}
          />
      }
    </div>;
  }
}

export default withStyles(styles)(App);