import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import anthony from '../../img/anthony.jpg'

import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    containerProfilCard: {
    //   display: 'flex',
    //   [theme.breakpoints.down('xs')]: {
    //     width: '250px',
    //   },
    backgroundColor: '#FFFFFF',
    padding: '0.5em'
    },
    pictureProfil: {
        height: '20.5em',
        borderRadius: '12px',
    }
}));

const ProfilCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.containerProfilCard}>
            <div>
                <img className={classes.pictureProfil} alt="img-anthony" src={anthony} />
            </div>
            <div>
                <h1>Anthony de Cuyper</h1>
                <h2>Front-end developper</h2>
                <a href="mailto:decuyperanthony@gmail.com">decuyperanthony@gmail.com</a>
            </div>
        </Card>
    );
};

export default ProfilCard;