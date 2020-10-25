import React from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    containerCard: {
    //   display: 'flex',
    //   [theme.breakpoints.down('xs')]: {
    //     width: '250px',
    //   },
    backgroundColor: '#FFFFFF',
    padding: '0.8em',
    marginBottom: '0.5em',
    fontSize: '18px',
    fontWeight: '500',
    color: '#4F4F4F'
    },

}));

const ProjectsTitle= ( {totalOfProjects} ) => {
    const classes = useStyles();
    return (
        <Card className={classes.containerCard}>
           Projects ({totalOfProjects})
        </Card>
    );
};

export default ProjectsTitle;

ProjectsTitle.propTypes = {
    totalOfProjects: PropTypes.number
};