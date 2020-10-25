import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

// import { Card } from '@material-ui/core';
import TechnologyFrontCard from './Front';
import TechnologyBackCard from './Back';

const useStyles = makeStyles((theme) => ({
    containerTechonlogiesComponent: {
    //   display: 'flex',
      [theme.breakpoints.up('sm')]: {
        display: 'flex'
      },
    // backgroundColor: '#FFFFFF',
    // padding: '0.8em',
    // marginBottom: '0.5em'
    },

}));

const Techonology = () => {
    const classes = useStyles();
    return (
        <div className={classes.containerTechonlogiesComponent}>
            <TechnologyFrontCard />
            <TechnologyBackCard />
        </div>
    );
};

export default Techonology;