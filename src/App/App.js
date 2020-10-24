import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

//* ---- COMPOSANT
import ProfilCard from './ProfilCard';

//* ----- STYLE
const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: '#F2F2F2',
    minHeight: '100vh',
    padding: '0.5em'
  //   display: 'flex',
  //   [theme.breakpoints.down('xs')]: {
  //     width: '250px',
  //   },
  },

}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
     <ProfilCard />
    </div>
  );
}

export default App;
