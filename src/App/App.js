import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

//* ---- COMPOSANT
import ProfilCard from './ProfilCard';
import Technology from './Technologie';
import Experiences from './Experiences';
import Projects from './Projects';
import HobbiesMobile from './HobbiesMobile';
import HobbiesDesktop from './HobbiesDesktop';

//* ----- STYLE
const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: '#F2F2F2',
    minHeight: '100vh',
    padding: '0.5em',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    [theme.breakpoints.up('sm')]: {
      // width: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '2em',
    },
  },
  profilAndTechnologyComponents: {
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
        <div className={classes.profilAndTechnologyComponents}>
          <div>
          <ProfilCard />
          <HobbiesDesktop />
          </div>
          <div className={classes.experiencesAndTechnologyComponents}>
            <Technology />
            <Experiences />
            <Projects />
          </div>
        </div>
        <HobbiesMobile />
    </div>
  );
}

export default App;
