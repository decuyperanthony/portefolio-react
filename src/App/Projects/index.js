import React from 'react';

// == components
import Title from './Title';
import Project from './Projects';

// == pictures
import tribz from '../../img/tribz.png'
import boutiqueDesAnges from '../../img/boutiqueDesAnges.png'
import solidarity from '../../img/solidarity.png'
import twitter1 from '../../img/tweeter1.png'

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
                name: 'express'
            },
            {
                id: 14,
                name: 'postgres'
            },
            {
                id: 14,
                name: 'mongo'
            },
            {
                id: 15,
                name: 'docker'
            },
            {
                id: 15,
                name: 'jenkins'
            },
        ],
        picture: tribz,
        websiteLink: 'https://app.tribz.fr/',
        repoLink: '#',
        title: 'Tribz',
        description: 'Plate-forme mettant en relation des influcenceurs et des grandes marques afin de faire du placement de produits.'
    },
    {
        id: 2,
        hashtags: [
            {
                id: 24,
                name: 'socket-io'
            },
            {
                id: 25,
                name: 'react'
            },
            {
                id: 25,
                name: 'node'
            },
            {
                id: 25,
                name: 'express'
            },
            {
                id: 26,
                name: 'postgres'
            },
            {
                id: 26,
                name: 'datamapper'
            },
            {
                id: 26,
                name: 'aws'
            },
            {
                id: 26,
                name: 'jenkins'
            },
        ],
        picture: solidarity,
        websiteLink: 'https://solidarity.website/',
        repoLink: 'https://github.com/O-clock-Bifrost/project-solidarite',
        title: 'Solidarity',
        description: 'Plate forme de salle de cours interactives dans lesquels un enseignant a un "chat" en temps réel et un système de partage d\'écran webcam et micro. '
    },
    {
        id: 3,
        hashtags: [
            {
                id: 34,
                name: 'react'
            },
            {
                id: 35,
                name: 'postgres'
            },
            {
                id: 36,
                name: 'multer'
            },
            {
                id: 36,
                name: 'sequelize'
            },
        ],
        picture: twitter1,
        websiteLink: '',
        repoLink: 'https://github.com/decuyperanthony/onlygood-react',
        title: 'Tweeter',
        description: 'Réseau social avec un système de follow/follower, de posts, de commentaires, likes et retweets'
    },
    {
        id: 4,
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
        description: 'Site vitrine de la Boutique des Anges situé à Paris - Montmartre'
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