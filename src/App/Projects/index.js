import React from 'react';

// == components
import Title from './Title';
import Project from './Project';

// == pictures
import tribz from '../../img/tribz.png'
import boutiqueDesAnges from '../../img/boutiqueDesAnges.png'
import solidarity from '../../img/solidarity.png'

const projectsData = [
    {
        id: 1,
        hashtags: [
            {
                id: 11,
                name: 'node'
            },
            {
                id: 12,
                name: 'react'
            },
            {
                id: 13,
                name: 'mongo'
            },
        ],
        picture: tribz,
        websiteLink: 'https://app.tribz.fr/',
        repoLink: '#',
        title: 'Tribz',
        description: 'lorem ipsum fneled oner preken apeche andes allez on y va pourquoi faire si tu veux y retourner nous pouvons mais demain'
    },
    {
        id: 2,
        hashtags: [
            {
                id: 14,
                name: 'node'
            },
            {
                id: 15,
                name: 'react'
            },
            {
                id: 16,
                name: 'postgres'
            },
        ],
        picture: solidarity,
        websiteLink: 'https://solidarity.website/',
        repoLink: 'https://github.com/O-clock-Bifrost/project-solidarite',
        title: 'Solidarity',
        description: 'lorem ipsum fneled oner preken apeche andes allez on y va pourquoi faire si tu veux y retourner nous pouvons mais demain'
    },
    {
        id: 3,
        hashtags: [
            {
                id: 17,
                name: 'wordpress'
            },
            {
                id: 18,
                name: 'Elementor'
            },
        ],
        picture: boutiqueDesAnges,
        websiteLink: 'https://www.boutiquedesanges.fr/',
        repoLink: 'https://github.com/O-clock-Bifrost/project-solidarite',
        title: 'Boutique des Anges',
        description: 'lorem ipsum fneled oner preken apeche andes allez on y va pourquoi faire si tu veux y retourner nous pouvons mais demain'
    },
]

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