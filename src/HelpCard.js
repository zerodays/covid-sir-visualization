import React, { Component } from 'react';
import { Box, Card, Grid, Typography, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

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
  },
  expandable: {
    maxHeight: 20,
    transition: 'max-height 300ms ease-out',
    '&:hover': {
      maxHeight: 512,
    },
  },
  legend: {
    width: 12,
    height: 12,
    borderColor:  grey[700],
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 2,
    display: 'inline-block',
    marginRight: 6,
  },
});

class HelpCard extends Component {
  render() {
    const {classes} = this.props;

    return <Card className={classes.root}>
      <Box p={1} className={classes.expandable}>
        <Grid container direction='row' spacing={1}>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>
              Pomoč
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='caption'>
              Preprosta simulacija lokalnega (epidemiološkega) <a
              href={'https://en.m.wikipedia.org/wiki/Compartmental_models_in_epidemiology#The_SIR_model'}>SIR modela</a>.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>
              Navigacija
            </Typography>
            <Typography variant='caption'>
              <ul>
                <li>Pritisnite tipko <span className={classes.key}>Enter</span> za simulacijo prehoda na naslednji dan. Prvi okuženi se bo pokazal na sredini zaslona na <b>1. dan</b>.
                </li>
                <li>Uporabite <span className={classes.key}>"scroll"</span> na mišlki za povečanje ali zmanjšanje vidnega polja.</li>
                <li>Parametre simulacije lahko upravljate s <b>kontrolno ploščo na desni strani zaslona</b>.</li>
                <li>Podatki na gafu <b>spodaj levo</b> se posodobijo vsakih 21 dni simulacije.
                </li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle2'>
              Legenda
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='caption'>
              <span className={classes.legend} style={{backgroundColor: this.props.susceptibleColor}}/>S (susceptible) dovzetni posamezniki.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='caption'>
              <span className={classes.legend} style={{backgroundColor: this.props.infectedColor}}/>I (infected) okuženi posamezniki.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='caption'>
              <span className={classes.legend} style={{backgroundColor: this.props.removedColor}}/>R (removed) odstranjeni oz. imuni posamezniki.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>;
  }
}

HelpCard.propTypes = {
  infectedColor: PropTypes.string.isRequired,
  susceptibleColor: PropTypes.string.isRequired,
  removedColor: PropTypes.string.isRequired,
};

export default withStyles(styles)(HelpCard);