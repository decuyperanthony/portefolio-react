import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';

// == pictures
import history from '../../img/history.jpg';
import website from '../../img/websitePassion.jpg';
import travel from '../../img/travel.jpg'

const hobbiesData = [
    {
        id: 144,
        title: 'Voyages',
        description: 'Paris nec mergitur fneled',
        picture: travel
    },
    {
        id: 142,
        title: 'Technologies',
        description: 'Paris nec mergitur fneled',
        picture: website
    },
    {
        id: 143,
        title: 'Histoire',
        description: 'Paris nec mergitur fneled',
        picture: history
    },

]

const useStyles = makeStyles((theme) => ({
    containerCard: {
    //   display: 'flex',
    //   [theme.breakpoints.down('xs')]: {
    //     width: '250px',
    //   },
    backgroundColor: '#FFFFFF',
    padding: '0.8em',
    marginBottom: '0.5em'
    },
    mainTitle: {
        fontWeight: '500',
        fontSize: '18px',
        color: '',
        // marginBottom: '0.5em'
    },
    pictureHobbies: {
        // height: '12.8em',
        // height: '100%',
        width: '89vw',
        height: 'auto',
        borderRadius: '12px',
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
                <div>
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