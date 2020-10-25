import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

//* ---- COMPOSANT
import ProfilCard from './ProfilCard';
import Technology from './Technologie';
import Experiences from './Experiences';
import Projects from './Projects';
import Hobbies from './Hobbies';

//* ----- STYLE
const useStyles = makeStyles((theme) => ({
  app: {
    backgroundColor: '#F2F2F2',
    minHeight: '100vh',
    padding: '0.5em',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
  //   display: 'flex',
    [theme.breakpoints.up('sm')]: {
      // width: '250px',
    },
  },

}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
        <ProfilCard />
        <Technology />
        <Experiences />
        <Projects />
        <Hobbies />
    </div>
  );
}

export default App;
