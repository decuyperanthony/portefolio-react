import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

//* ---- COMPOSANT
import ProfilCard from './ProfilCard';
import Technology from './Technologie';
import Experiences from './Experiences';
import Formation from './Formation';
import Projects from './Projects';
import HobbiesMobile from './HobbiesMobile';
import HobbiesDesktop from './HobbiesDesktop';

//* ----- STYLE
const useStyles = makeStyles((theme) => ({
  app: {
    // margin: 'auto',
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
  profilAndHobbiesComponents: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center'
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
          <div className={classes.profilAndHobbiesComponents}>
          <ProfilCard />
          <HobbiesDesktop />
          </div>
          <div className={classes.experiencesAndTechnologyComponents}>
            <Technology />
            <Experiences />
            <Formation />
            <Projects />
          </div>
        </div>
        <HobbiesMobile />
    </div>
  );
}

export default App;
