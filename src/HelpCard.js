import React, { Component } from 'react';
import { Box, Card, Grid, Typography, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
  root: {
    maxWidth: 256,
  },
  key: {
    backgroundColor: grey[300],
    borderRadius: 2,
    borderWidth: 2,
    borderColor: grey[300],
    borderStyle: 'solid',
    paddingX: 8,
    paddingY: 2,
  }
});

class HelpCard extends Component {
  render() {
    const {classes} = this.props;

    return <Card className={classes.root}>
      <Box p={1}>
        <Grid container direction='row' spacing={1}>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>
              About
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='caption'>
              This is a simplified discrete representation of the epidemiological <a
              href={'https://en.m.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SIR_model'}>SIR model</a>.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>
              Navigation
            </Typography>
            <Typography variant='caption'>
              <ul>
                <li>Press <span className={classes.key}>Enter</span> to move to the next day. First infection will
                  appear in the center of the screen on <b>day 1</b>.</li>
                <li><span className={classes.key}>Scroll</span> to zoom in and out of the visualization.</li>
                <li>Use <b>control panel on the right</b> to adjust simulation parameters.</li>
                <li>Hover over the <b>graph icon in the left bottom conner</b> to view number of
                  susceptible/infected/removed individuals over time.
                </li>
              </ul>
            </Typography>
          </Grid>

        </Grid>
      </Box>
    </Card>;
  }
}

export default withStyles(styles)(HelpCard);