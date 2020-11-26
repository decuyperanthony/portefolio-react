import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';

import hobbiesData from '../../data/hobbiesData';

const useStyles = makeStyles((theme) => ({
    containerCard: {
    //   display: 'flex',
    //   [theme.breakpoints.down('xs')]: {
    //     width: '250px',
    //   },
    backgroundColor: '#FFFFFF',
    padding: '0.8em',
    marginBottom: '0.5em',
    maxWidth: '413px',
    [theme.breakpoints.up('lg')]: {
        display: 'none',
    },
    },
    mainTitle: {
        fontWeight: '500',
        fontSize: '18px',
        color: '',
        // marginBottom: '0.5em'
    },
    pictureHobbiesContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    pictureHobbies: {
        maxWidth: '100%',
        borderRadius: '12px',
        maxHeight: '10em'
    },
    title: {
        fontWeight: '600',
        fontSize: '16px',
        color: '#333333',
        marginBottom: '0.5em'
    },
    description: {
        fontWeight: '500',
        fontSize: '14px',
        color: '#828282',
        marginBottom: '0.5em'
    }
}));

const TechnologyCard = () => {
    const classes = useStyles();
    const hobbiesJSX = hobbiesData.map((h) => {
        return (
            <div>
                <div className={classes.pictureHobbiesContainer}>
                    <img
                    src={h.picture}
                    alt={`${h.title}`}
                    className={classes.pictureHobbies}
                    />
                </div>
                <div className={classes.title}>{h.title}</div>
                <div className={classes.description}>{h.description}</div>
            </div>
        )
    })
    return (
        <Card className={classes.containerCard}>
           <div className={classes.mainTitle}>Hobbies</div>
           {hobbiesJSX}
        </Card>
    );
};

export default TechnologyCard;