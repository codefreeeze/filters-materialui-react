import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  thumb: {
    color: '#000',
  },
  rail: {
    color: `rgba(0, 0, 0, 0.26)`,
  },
  track: {
    color: '#000',
  },
});

const SliderProton = ({ value, changePrice, minprice, maxprice }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        min={minprice}
        max={maxprice}
        value={value}
        onChange={changePrice}
        valueLabelDisplay="on"

        classes={{
          thumb: classes.thumb,
          rail: classes.rail,
          track: classes.track,
        }}
      />
    </div>
  );
};

export default SliderProton;
