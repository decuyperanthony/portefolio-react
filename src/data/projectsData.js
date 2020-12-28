// == pictures
import tribz from '../img/tribz.png';
import boutiqueDesAnges from '../img/boutiqueDesAnges.png';
import solidarity from '../img/solidarity.png';
import twitter1 from '../img/tweeter1.png';
import button from '../img/button2.png';
import ebook from '../img/ebookoverview.png';
import pokemon from '../img/pokemon.png';
import input from '../img/inputchall.png';
import starwars from '../img/starwars.png';
import catmash from '../img/catmash-screen.png';


const projectsData = [
    {
        id: 1,
        linkId: 'tribz',
        hashtags: [
            {
                id: 17001343,
                name: 'progressive-web-app'
            },
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
        id: 4,
        hashtags: [
            {
                id: 17001343,
                name: 'progressive-web-app'
            },
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
                id: 36327656,
                name: 'socket-io'
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
        websiteLink: 'https://www.onlygood.website/',
        repoLink: 'https://github.com/decuyperanthony/onlygood-react',
        title: 'Tweeter',
        description: 'Progressive web app en React-Node : Réseau social avec un système de follow/follower, de posts, de commentaires, likes et retweets. Système de messagerie instantanée entre chaque utilisateurs via les websockets dans lequel nous voyons les utilisateurs se connectés en temps réel. '
    },
    {
        id: 2,
        linkId: 'solidarity',
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
        linkId: 'boutiquedesanges',
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
        id: 5654565,
        hashtags: [
            {
                id: 1701201,
                name: 'node'
            },
            {
                id: 1822323,
                name: 'react'
            },
            {
                id: 1822324,
                name: 'redux'
            },
            {
                id: 1823225,
                name: 'postgres'
            },
            {
                id: 18232225,
                name: 'sqitch'
            },
            {
                id: 18233225,
                name: 'datamapper'
            },
        ],
        picture: catmash,
        websiteLink: 'https://catmash-anthony-de-cuyper.netlify.app/',
        repoLink: 'https://github.com/decuyperanthony/catmash-atelier--front',
        title: 'Cat mash',
        description: 'Match pour savoir quel est le chat le plus mignon'
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
        id: 33,
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
        picture: input,
        websiteLink: 'https://anthonydecuyper-challenge-input.netlify.app/',
        repoLink: 'https://github.com/decuyperanthony/input-challenges-dev',
        title: 'Input component with props',
        description: 'Création d\'un composant <Input /> qui peut recevoir des props permettant de changer la couleur, la taille, ajouter un icone, le rendre disabled etc ...'
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
        websiteLink: 'https://anthonydecuyper-pokedex.netlify.app/',
        repoLink: 'https://github.com/decuyperanthony/react-pokedex-decuyperanthony',
        title: 'Search on Poke API',
        description: 'Rechercher, trier et filtrer les pokemons'
    },
    {
        id: 9,
        hashtags: [
            {
                id: 123451,
                name: 'react'
            },
            {
                id: 123463,
                name: 'redux'
            },
            {
                id: 123489098,
                name: 'node'
            },
            {
                id: 123475,
                name: 'axios'
            },
            {
                id: 12348998,
                name: 'express'
            },
            {
                id: 1234890,
                name: 'starwarsapi'
            },
            {
                id: 1234998,
                name: 'material-UI'
            },
            {
                id: 1234998,
                name: 'netlify'
            },
            {
                id: 1234998,
                name: 'heroku'
            },
        ],
        picture: starwars,
        websiteLink: 'https://anthonydecuyper-star-wars-fastory.netlify.app/',
        repoLink: 'https://github.com/decuyperanthony/star-wars',
        title: 'Authentification && Search on Star Wars API',
        description: 'Rechercher, trier et filtrer les héros de Star Wars'
    },
]


export default projectsData;