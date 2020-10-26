import React from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    containerProfilCard: {
    //   display: 'flex',
    [theme.breakpoints.up('sm')]: {
            display: 'flex'
    },
    [theme.breakpoints.up('lg')]: {
        marginLeft: '0.5em'
    },
    backgroundColor: '#FFFFFF',
    padding: '0.8em',
    marginBottom: '0.5em'
    },
    pictureWebsiteContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '0.8em',
        [theme.breakpoints.up('sm')]: {
            width: '40%',
            justifyContent: 'flex-start',
        },


    },
    pictureWebsite: {
        // height: '12.8em',
        // height: '100%',
        width: '89vw',
        height: 'auto',
        borderRadius: '12px',
        maxWidth: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '14.5em',
            height: 'auto'
        },
    },
    textContainer: {
        [theme.breakpoints.up('sm')]: {
            width: '60%',
            marginLeft: '1em'
        },
    },
    hashtagsContainer: {
        fontWeight: '500',
        fontSize: '12px',
        color: '#4F4F4F',
        marginBottom: '1.2em'
    },
    title: {
        marginBottom: '0.8em',
        fontWeight: '500',
        fontSize: '18px',
        color: '#333333',
    },
    description: {
        marginBottom: '1.4em',
        fontWeight: '500',
        fontSize: '12px',
        color: '#828282',
    },
    containerButton: {
        display: 'flex',
        '& a': {
            textDecoration: 'none',
            color: '#5C94E1'
        }
    },
    button: {
        border: '1px solid #5C94E1',
        borderRadius: '12px',
        padding: '0.5em 1.5em',
        fontSize: '14px',
        '&:hover': {
            backgroundColor: '#5C94E1',
            color: 'white'
        }
    }

}));

const Project = ( {projectData} ) => {
    console.log('projectData', projectData);
    const classes = useStyles();
    const hashtagsJSX = projectData.hashtags.map((h) => {
        return (
            <span key={h.id + 66}>#{h.name} {' '}</span>
        )
    })
    return (
        <Card className={classes.containerProfilCard}>
              <div className={classes.pictureWebsiteContainer}>
                <img className={classes.pictureWebsite} alt={projectData.picture} src={projectData.picture} />
              </div>
              <div className={classes.textContainer}>
                <div className={classes.hashtagsContainer}>{hashtagsJSX}</div>
                <div className={classes.title}>{projectData.title}</div>
                <div className={classes.description}>{projectData.description}</div>
                <div className={classes.containerButton}>
                    <a href={projectData.websiteLink} style={{marginRight: '0.8em'}}>
                        <div className={classes.button}>Demo</div>
                    </a>
                    <a href={projectData.repoLink}>
                        <div className={classes.button}>Code</div>
                    </a>
                </div>
              </div>
        </Card>
    );
};

export default Project;

Project.propTypes = {
    projectData: PropTypes.shape(
      PropTypes.shape({
        id: PropTypes.number,
        // hashtags: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
      }),
    ),
  };