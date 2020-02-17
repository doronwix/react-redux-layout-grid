import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  brickContext: {

  },
  removeStyle: {
    position: "absolute",
    right: "2px",
    top: 0,
    cursor: "pointer"
  }
});

export default function Bricks({size, removeAction}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={clsx(classes.brickContext)}>
        <Title size={size}>C</Title>
        <div>
          <span
            className={classes.removeStyle}
            onClick ={removeAction}                      
          >
            x
          </span>
        </div>
        <Typography component="p" variant={"h" + size}>
        Text
        </Typography>

        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            Other Text
          </Link>
        </div>

      </div>
    </React.Fragment>
  );
}
