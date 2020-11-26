import React from 'react';

import Pagination from '@material-ui/lab/Pagination';

// == components
import Title from './Title';
import Project from './Projects';

// == data
import projectsData from '../../data/projectsData';

const Projects = () => {
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
    const ProjectCardJSX = mySplitProjectTable.slice(firstItem, lastItem )
        .map((p) => {
                return(
                    <Project key={p.id + 22} projectData={p}/>
                )
        });
    return (
       <>
         <Title totalOfProjects={projectsDataLength}/>
         {ProjectCardJSX}
         <Pagination
            count={countPagination}
            color="primary"
            page={page}
            onChange={handleChange}
          />
       </>
    );
};

export default Projects;