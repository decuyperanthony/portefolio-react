import React from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    containerProfilCard: {
    //   display: 'flex',
    //   [theme.breakpoints.down('xs')]: {
    //     width: '250px',
    //   },
    backgroundColor: '#FFFFFF',
    padding: '0.8em',
    marginBottom: '0.5em'
    },
    pictureWebsite: {
        height: '12.8em',
        borderRadius: '12px',
    },

}));

const Project = ( {projectData} ) => {
    console.log('projectData', projectData)
    const classes = useStyles();
    return (
        <Card className={classes.containerProfilCard}>
              <div>
                <img className={classes.pictureWebsite} alt={projectData.picture} src={projectData.picture} />
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