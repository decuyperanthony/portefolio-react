// === img
import dev from '../img/diplomedev.jpg';
import paris5 from '../img/paris5.jpeg';
import opquast from '../img/opquast.png';
import oclock from '../img/oclock.png';

const formationData = [
    {
        id: 1098,
        date: 'Octobre 2020',
        link: 'https://www.francecompetences.fr/recherche/rncp/31114/',
        title: 'Titre professionel développeur web et web mobile',
        logo: dev,
        description: 'niveau III, RNCP31114'
    },
    {
        id: 1099,
        date: 'Juin 2020',
        title: 'Certification Opquast 830/1000 : avancé',
        link: 'https://directory.opquast.com/fr/certificat/GC6XEH/',
        logo: opquast,
        description: 'Maîtrise de la qualité en projet Web'
    },
    {
        id: 1100,
        date: 'Dec 2019 - Juin 2020',
        link: 'https://oclock.io/formations/developpeur-web-fullstack-javascript?gclid=Cj0KCQiAh4j-BRCsARIsAGeV12BiN1w_rFUryjliyjBelZ5YO0-8cYr-KODrKFf9FOlOTNv47rHjWgMaArXuEALw_wcB',
        title: 'Formation Full Stack JavaScript',
        logo: oclock,
        description: 'Labellisée Grande Ecole du Numérique à l\'école O\'Clock'
    },
    {
        id: 1100,
        date: '2011 - 2014',
        link: 'https://math-info.u-paris.fr/',
        title: 'Licence Mathematiques et Informatique',
        logo: paris5,
        description: ' à l\'Université Paris 5 - René Descartes'
    }
];

export default formationData;