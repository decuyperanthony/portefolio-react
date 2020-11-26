import React from 'react';

// == components
import Title from './Title';
import Project from './Projects';

// == data
import projectsData from '../../data/projectsData';

const Projects= () => {
    const projectsDataLength = projectsData.length
    const ProjectCardJSX = projectsData.map((p) => {
        return(
            <Project key={p.id + 22} projectData={p}/>
        )
    })
    return (
       <>
         <Title totalOfProjects={projectsDataLength}/>
         {ProjectCardJSX}
       </>
    );
};

export default Projects;