import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import anthony from '../../img/anthony.jpg'

import { Card } from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

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
    },
    pictureProfilContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    pictureProfil: {
        width: '89.5vw',
        height: 'auto',
        borderRadius: '12px',
        [theme.breakpoints.up('sm')]: {
            // width: '250px',
        },
    },
    profilDescription: {
        color: '#4F4F4F',
        '& h1': {
            fontWeight: '600',
            fontSize: '18px',
            lineHeight: '30px',
            marginTop: '0.4em',
            marginBottom: '0'
        },
        '& h2': {
            marginTop: '-0.4em',
            marginBottom: '1.2em',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '22px',
            color: '#828282 !important'
        },
        '& a':{
            textDecoration: 'none',
            color: '#4F4F4F',
            fontSize: '14px',
        },
        '& p':{
            color: '#828282',
            fontSize: '14px',
        }
    },
    information: {
        display: 'flex',
        marginBottom: '0.2em'
    }
}));

const ProfilCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.containerCard}>
            <div className={classes.pictureProfilContainer}>
                <img className={classes.pictureProfil} alt="img-anthony" src={anthony} />
            </div>
            <div className={classes.profilDescription}>
                <h1>Anthony de Cuyper</h1>
                <h2>Front-end developper</h2>
                <div className={classes.information}>
                    <PhoneIcon fontSize="small" style={{marginRight: '0.2em', color: '#4F4F4F'}}/>
                    <a href="mailto:decuyperanthony@gmail.com">decuyperanthony@gmail.com</a>
                </div>
                <div className={classes.information}>
                    <MailIcon fontSize="small" style={{marginRight: '0.2em', color: '#4F4F4F'}}/>
                     <a href="tel:+33607597862">06 07 59 78 62</a>
                </div>
                <p>
                Actuellement développeur chez Tanke. Développement en cours d une application en React avec deux API différentes en Node. Mongo && Postgres
                </p>
            </div>
        </Card>
    );
};

export default ProfilCard;