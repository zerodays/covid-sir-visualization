import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
} from '@material-ui/core';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  canvas: {
    position: 'absolute',
  },
});

// global data fields for better performance
let field;
const SUSCEPTIBLE = 0;
const INFECTED = 1;
const REMOVED = 2;

class VisualizationField extends Component {
  canvasRef = React.createRef();

  componentDidMount() {
    field = this.emptyField();
  }

  countInfectedNeighbours = (field, x, y) => {
    const {widthPoints, heightPoints} = this.props;

    let count = 0;

    for (let i = y - 1; i < y + 2; i++) {
      for (let j = x - 1; j < x + 2; j++) {

        if (i === x && j === y) continue; // skip self
        if (i < 0 || j < 0 || i >= heightPoints || j >= widthPoints) continue; // watch for array boundaries

        if (field[i][j] === INFECTED) count++;
      }
    }

    return count;
  };

  paintRect = (x, y, newField, canvasContext) => {
    const {rectSize} = this.props;
    canvasContext.fillStyle = this.getColorFromState(newField[y][x]);
    canvasContext.fillRect(rectSize * x, rectSize * y, rectSize, rectSize);
  };

  getNewStateForPoint = (field, x, y) => {
    if (field[y][x] === REMOVED) return REMOVED;

    if (field[y][x] === INFECTED) {
      if (Math.random() < this.props.gamma) return REMOVED;
      else return INFECTED;
    }

    let infectedNeighbours = this.countInfectedNeighbours(field, x, y);

    if (Math.random() < infectedNeighbours * this.props.betta / 8) return INFECTED;
    return SUSCEPTIBLE;
  };

  getColorFromState = (state) => {
    const {infectedColor, susceptibleColor, removedColor} = this.props;
    if (state === INFECTED) return infectedColor;
    if (state === REMOVED) return removedColor;
    return susceptibleColor;
  };

  emptyField = () => {
    const {widthPoints, heightPoints} = this.props;

    let newField = Array(heightPoints);
    for (let i = 0; i < heightPoints; i++) {
      newField[i] = Array(widthPoints).fill(0);
    }
    return newField;
  };

  evolve = (field, canvasContext) => {
    const {widthPoints, heightPoints} = this.props;
    let newField = this.emptyField();

    // count each section
    let s = 0;
    let i = 0;
    let r = 0;

    // do the evolution
    for (let y = 0; y < heightPoints; y++) {
      for (let x = 0; x < widthPoints; x++) {
        const newState = this.getNewStateForPoint(field, x, y);
        newField[y][x] = newState;

        if (newState === SUSCEPTIBLE) s++;
        else if (newState === INFECTED) i++;
        else if (newState === REMOVED) r++;

        if (newField[y][x] !== field[y][x]) this.paintRect(x, y, newField, canvasContext);
      }
    }

    // normalize
    const sum = s + i + r;
    s /= sum;
    i /= sum;
    r /= sum;

    return [newField, s, i, r];
  };

  tick = () => {
    let context = this.getCanvasContext();

    let startTime = new Date().getTime();
    const [fieldTmp, s, i, r] = this.evolve(field, context);
    field = fieldTmp;
    console.log(`time for evolution: ${new Date().getTime() - startTime} ms`);
    return [s, i, r];
  };

  addSeed = (x, y) => {
    field[y][x] = INFECTED;
    this.paintRect(x, y, field, this.getCanvasContext());
  };

  reset = () => {
    const {widthPoints, heightPoints, rectSize} = this.props;
    field = this.emptyField();
    this.getCanvasContext().clearRect(0, 0, widthPoints * rectSize, heightPoints * rectSize);
  };

  getCanvasContext = () => {
    return this.canvasRef.current.getContext('2d');
  };


  render() {
    const {classes, widthPoints, heightPoints, rectSize, susceptibleColor} = this.props;

    return <div className={classes.root} style={{
      width: widthPoints * rectSize,
      height: heightPoints * rectSize,
    }}>
      <canvas
        ref={this.canvasRef}
        className={classes.canvas}
        style={{
          backgroundColor: susceptibleColor,
          transform: `scale(${this.props.zoom})`,
          width: widthPoints * rectSize,
          height: heightPoints * rectSize,
        }}
        width={widthPoints * rectSize}
        height={heightPoints * rectSize}/>
    </div>;
  }
}

VisualizationField.propTypes = {
  betta: PropTypes.number.isRequired,
  gamma: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  widthPoints: PropTypes.number.isRequired,
  heightPoints: PropTypes.number.isRequired,
  rectSize: PropTypes.number.isRequired,
  infectedColor: PropTypes.string.isRequired,
  susceptibleColor: PropTypes.string.isRequired,
  removedColor: PropTypes.string.isRequired,
};

export default withStyles(styles)(VisualizationField);

