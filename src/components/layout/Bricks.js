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
});

export default function Bricks({size}) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={clsx(classes.brickContext)}>
        <Title size={size}>Component</Title>
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
