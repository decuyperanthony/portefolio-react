import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

//* ---- COMPOSANT
import ProfilCard from './ProfilCard';
import TechnologyFrontCard from './Technologie/front';
import TechnologyBackCard from './Technologie/back';
import Experiences from './Experiences';

//* ----- STYLE
const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: '#F2F2F2',
    minHeight: '100vh',
    padding: '0.5em',
    fontFamily: 'Montserrat',
    fontStyle: 'normal'
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
        <TechnologyFrontCard />
        <TechnologyBackCard />
        <Experiences />
    </div>
  );
}

export default App;
