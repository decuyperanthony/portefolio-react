import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

// == components
import Title from './Title';
import Project from './Projects';


// == data
import projectsData from '../../data/projectsData';

const useStyles = makeStyles((theme) => ({
    containerCard: {
    [theme.breakpoints.up('lg')]: {
        marginLeft: '0.5em'
    },
    backgroundColor: '#FFFFFF',
    padding: '0.8em',
    marginBottom: '0.5em',
    fontSize: '18px',
    fontWeight: '500',
    color: '#4F4F4F',
    // '& MuiPaginationItem-textPrimary': {
    //     background: 'red'
    // }
    },

    pagination: {
        display: 'flex',
        justifyContent: 'flex-end'
    }

}));

const Projects = () => {
    const classes = useStyles();
    const [firstItem, setFirstItem] = React.useState(0);
    const [lastItem, setLastItem] = React.useState(3);
    const [page, setPage] = React.useState(1);
    const projectsDataLength = projectsData.length;
    const countPagination = Math.ceil(projectsDataLength / 3);
    const mySplitProjectTable = [...projectsData];

    const handleChange = (event, value) => {
        setPage(value);
        setFirstItem(value * 3 - 3);
        setLastItem(value * 3);
    };
    const ProjectCardJSX = mySplitProjectTable.slice(firstItem, lastItem)
        .map((p) => {
                return(
                    <Project key={p.id + 22} projectData={p}/>
                )
        });
    return (
       <>
         <Title totalOfProjects={projectsDataLength}/>
         {ProjectCardJSX}
         <Card className={classes.containerCard}>
            <Pagination
                className={classes.pagination}
                // style={{background: 'red'}}
                count={countPagination}
                color="primary"
                page={page}
                onChange={handleChange}
            />
          </Card>
       </>
    );
};

export default Projects;