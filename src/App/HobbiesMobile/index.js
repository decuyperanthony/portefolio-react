import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';

import hobbiesData from '../../data/hobbiesData';

const useStyles = makeStyles((theme) => ({
    containerCard: {
        margin: 'auto',
        backgroundColor: '#FFFFFF',
        padding: '0.8em',
        marginBottom: '0.5em',
        maxWidth: '413px',
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '413px',
        },
    },
    mainTitle: {
        fontWeight: '500',
        fontSize: '18px',
        color: '',
    },
    containerHobbies: {
        [theme.breakpoints.down('md')]: {
            display: 'flex',
            maxWidth: '100%',
            justifyContent: 'space-around'
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
            maxWidth: '413px',
        },
    },
    containerHobby: {
        [theme.breakpoints.down('md')]: {
            // display: 'flex',
            width: '33%'
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
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
            <div className={classes.containerHobby}>
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
           <div className={classes.containerHobbies}>
            {hobbiesJSX}
           </div>
        </Card>
    );
};

export default TechnologyCard;