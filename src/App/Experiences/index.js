import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';

import experiencesData from '../../data/experiencesData';

const useStyles = makeStyles((theme) => ({
    containerCard: {
    //   display: 'flex',
    //   [theme.breakpoints.down('xs')]: {
    //     width: '250px',
    //   },
    backgroundColor: '#FFFFFF',
    padding: '0.8em',
    marginBottom: '0.5em',
    [theme.breakpoints.up('lg')]: {
        marginLeft: '0.5em'
    },
    },
    experienceTitle: {
        fontSize: '18px',
        fontWeight: '500',
        marginBottom: '0.5em'
    },
    containerExperience: {
        display: 'flex',
        marginBottom: '0.5em'

    },
    picture: {
        height: 'auto',
        width: '4em'
    },
    containerDescription: {
        marginLeft: '0.8em'
    }
}));

const ExperiencesCard = () => {
    const classes = useStyles();
    const experiencesJSX = experiencesData.map((exp) => {
        return (
            <div key={exp.id + 33} className={classes.containerExperience}>
                <div>
                    <img
                    src={exp.logo}
                    alt="logo entreprise"
                    className={classes.picture}
                     />
                </div>
                <div className={classes.containerDescription}>
                    <div style={{fontWeight: '500', fontSize: '11px', color: '#828282', marginBottom: '0.5em'}}>{exp.date}</div>
                    <div style={{fontWeight: '600', fontSize: '13px', color: '#000000', marginBottom: '1em'}}>{exp.title}</div>
                    <div style={{fontWeight: '500', fontSize: '13px', color: '#828282', marginBottom: '1em'}}>{exp.description}</div>
                </div>
            </div>
        )
    })
    return (
        <Card className={classes.containerCard}>
            <div className={classes.experienceTitle}>Experiences</div>
            <div>
                {experiencesJSX}
            </div>
        </Card>
    );
};

export default ExperiencesCard;