import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import anthony from '../../img/anthony.jpg'
import cv from '../../img/AnthonydeCuyperCV.pdf'

import { Card } from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DescriptionIcon from '@material-ui/icons/Description';
import opquast from '../../img/opquast.png'
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
    containerNameOpquast: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    name: {

    },
    opquast: {
        height: '5em',
        transition: '0.3s',
        '&:hover': {
            height: '7em',
            // transition: '0.2s'
        }
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
            color: '#3F51B5',
            fontSize: '14px',
            transition: '0.3s',
            opacity: '0.6',
            '&:hover': {
                textDecoration: 'underline',
                opacity: '1',
            }
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
                <div className={classes.containerNameOpquast}>
                    <div className={classes.name}>
                        <h1>Anthony de Cuyper</h1>
                        <h2>Developpeur Node-React</h2>
                        <div className={classes.information}>
                            <ReceiptIcon fontSize="small" style={{marginRight: '0.5em', color: '#4F4F4F'}}/>
                            <a href="https://www.francecompetences.fr/recherche/rncp/31114/">Titre Professionel developpeur web et web mobile</a>
                        </div>
                    </div>
                    <div>
                        <a href="https://directory.opquast.com/fr/certificat/GC6XEH/">
                            <img src={opquast} alt="upquast" className={classes.opquast}/>
                        </a>
                    </div>
                </div>
                <div className={classes.information}>
                    <LinkedInIcon fontSize="small" style={{marginRight: '0.5em', color: '#4F4F4F'}}/>
                    <a href="https://www.linkedin.com/in/anthony-de-cuyper/">anthony-de-cuyper</a>
                </div>
                <div className={classes.information}>
                    <GitHubIcon fontSize="small" style={{marginRight: '0.5em', color: '#4F4F4F'}}/>
                    <a href="https://github.com/decuyperanthony?tab=repositories">decuyperanthony</a>
                </div>
                <div className={classes.information}>
                    <PhoneIcon fontSize="small" style={{marginRight: '0.5em', color: '#4F4F4F'}}/>
                    <a href="mailto:decuyperanthony@gmail.com">decuyperanthony@gmail.com</a>
                </div>
                <div className={classes.information}>
                    <MailIcon fontSize="small" style={{marginRight: '0.5em', color: '#4F4F4F'}}/>
                     <a href="tel:+33607597862">06 07 59 78 62</a>
                </div>
                <div className={classes.information}>
                    <DescriptionIcon fontSize="small" style={{marginRight: '0.5em', color: '#4F4F4F'}} />
                    <a href={cv} target = "_blank" rel="noreferrer">CV</a>
                </div>
                <p>
                Actuellement développeur chez Tanke. Développement en cours d une application en React avec deux API différentes en Node. Mongo && Postgres
                </p>

            </div>
        </Card>
    );
};

export default ProfilCard;