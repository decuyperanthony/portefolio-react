// == pictures
import tribz from '../img/tribz.png'
import boutiqueDesAnges from '../img/boutiqueDesAnges.png'
import solidarity from '../img/solidarity.png'
import twitter1 from '../img/tweeter1.png'
import button from '../img/button2.png'
import ebook from '../img/ebookoverview.png'
import pokemon from '../img/pokemon.png'

const projectsData = [
    {
        id: 1,
        hashtags: [
            {
                id: 121,
                name: 'react'
            },
            {
                id: 122,
                name: 'redux'
            },
            {
                id: 123,
                name: 'node'
            },
            {
                id: 124,
                name: 'express'
            },
            {
                id: 125,
                name: 'postgres'
            },
            {
                id: 126,
                name: 'mongo'
            },
            {
                id: 127,
                name: 'docker'
            },
            {
                id: 128,
                name: 'jenkins'
            },
            {
                id: 15532,
                name: 'materialUI'
            },
        ],
        picture: tribz,
        websiteLink: 'https://app.tribz.fr/',
        repoLink: false,
        title: 'Tribz',
        description: 'Plate-forme mettant en relation des influcenceurs et des grandes marques afin de faire du placement de produits.'
    },
    {
        id: 2,
        hashtags: [
            {
                id: 241,
                name: 'socket-io'
            },
            {
                id: 252,
                name: 'react'
            },
            {
                id: 25098,
                name: 'redux'
            },
            {
                id: 253,
                name: 'node'
            },
            {
                id: 254,
                name: 'express'
            },
            {
                id: 265,
                name: 'postgres'
            },
            {
                id: 266,
                name: 'datamapper'
            },
            {
                id: 269,
                name: 'aws'
            },
            {
                id: 2601,
                name: 'jenkins'
            },
            {
                id: 2601,
                name: 'semanthicUI'
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
                id: 3411,
                name: 'react'
            },
            {
                id: 341123,
                name: 'redux'
            },
            {
                id: 3412,
                name: 'node'
            },
            {
                id: 3423,
                name: 'express'
            },
            {
                id: 3532,
                name: 'postgres'
            },
            {
                id: 3632,
                name: 'multer'
            },
            {
                id: 3634,
                name: 'sequelize'
            },
        ],
        picture: twitter1,
        websiteLink: false,
        repoLink: 'https://github.com/decuyperanthony/onlygood-react',
        title: 'Tweeter',
        description: 'Réseau social avec un système de follow/follower, de posts, de commentaires, likes et retweets'
    },
    {
        id: 4,
        hashtags: [
            {
                id: 1734,
                name: 'wordpress'
            },
            {
                id: 1823,
                name: 'Elementor'
            },
        ],
        picture: boutiqueDesAnges,
        websiteLink: 'https://www.boutiquedesanges.fr/',
        repoLink: false,
        title: 'Boutique des Anges',
        description: 'Site vitrine de la Boutique des Anges situé à Paris - Montmartre'
    },
    {
        id: 5,
        hashtags: [
            {
                id: 17001,
                name: 'react'
            },
            {
                id: 18223,
                name: 'sass'
            },
            {
                id: 18224,
                name: 'netlify'
            },
            {
                id: 18225,
                name: 'javascript'
            },
        ],
        picture: button,
        websiteLink: 'https://anthonydecuyperbuttonchallenge.netlify.app/',
        repoLink: 'https://github.com/decuyperanthony/button-style-react',
        title: 'Button component with props',
        description: 'Création d\'un composant <Button /> qui peut recevoir des props permettant de changer la couleur, la taille, ajouter un icone, le rendre disabled etc ...'
    },
    {
        id: 6,
        hashtags: [
            {
                id: 170001,
                name: 'react'
            },
            {
                id: 1700023,
                name: 'recoil'
            },
            {
                id: 182023,
                name: 'node'
            },
            {
                id: 182024,
                name: 'express'
            },
            {
                id: 182025,
                name: 'mongo'
            },
            {
                id: 182029,
                name: 'bootstrap'
            },
            {
                id: 182090,
                name: 'multer'
            },
        ],
        picture: ebook,
        websiteLink: false,
        repoLink: 'https://github.com/decuyperanthony/Ebook-app-MERN-uploadFile',
        title: 'Library Ebook Node Mongo',
        description: 'Tableau repertoriant les livres lus à l\'aide d\'un formulaire'
    },
    {
        id: 7,
        hashtags: [
            {
                id: 12345,
                name: 'react'
            },
            {
                id: 12346,
                name: 'redux'
            },
            {
                id: 12347,
                name: 'axios'
            },
            {
                id: 12348,
                name: 'pokeapi'
            },
            {
                id: 12349,
                name: 'semanthicUI'
            },
        ],
        picture: pokemon,
        websiteLink: 'https://anthonydecuypersearchonpokemonapi.netlify.app/',
        repoLink: 'https://github.com/decuyperanthony/react-pokedex-decuyperanthony',
        title: 'Search on Poke API',
        description: 'Rechercher, trier et filtrer les pokemons'
    },
]


export default projectsData;