import React, { Component } from 'react';
import { Box, Card, Grid, Slider, Button, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    width: 256,
  },
  day: {
    float: 'right',
  }
});

class ControlPanel extends Component {
  render() {
    const {classes} = this.props;

    return <Card className={classes.root}>
      <Box p={1}>
        <Grid container direction='row' justify='center' spacing={1}>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>
              Control panel <span className={classes.day}>Day {this.props.day}</span>
            </Typography>
          </Grid>
          <Grid item xs={12}/>
          <Grid item xs={12}>
            <Typography variant='body2'>
              β <small> - probability of being infected after a contact with an infectious individual</small>
            </Typography>
            <Box pt={4}>
              <Slider
                value={this.props.betta}
                min={0}
                max={1}
                step={0.01}
                onChange={(e, v) => this.props.onChangeBetta(v)}
                valueLabelDisplay="on"
              />
            </Box>
          </Grid>
          <Grid item xs={12}/>
          <Grid item xs={12}>
            <Typography variant='body2'>
              γ <small> - probability of being "removed" (either dying or becoming non-susceptible)</small>
            </Typography>
            <Box pt={4}>
              <Slider
                value={this.props.gamma}
                min={0}
                max={1}
                step={0.01}
                onChange={(e, v) => this.props.onChangeGamma(v)}
                valueLabelDisplay="on"
              />
            </Box>
          </Grid>
          <Grid item xs={12}/>
          <Grid item xs={12}>
            <Typography variant='caption'>
              TODO: table of sample values for covid, vaccinated population, flue etc.
            </Typography>
          </Grid>
          <Grid item xs={12}/>
          <Grid item>
            <Button size='small' variant='raised' onClick={this.props.onReset} color='secondary'>
              Reset simulation
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>;
  }
}

ControlPanel.propTypes = {
  day: PropTypes.number.isRequired,
  betta: PropTypes.number.isRequired,
  gamma: PropTypes.number.isRequired,
  onChangeBetta: PropTypes.func.isRequired,
  onChangeGamma: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default withStyles(styles)(ControlPanel);