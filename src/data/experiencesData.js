// === img
import tanke from '../img/logo_tribz.png'
import solidarity from '../img/S_logo_favicon_fonce.png'
import bda from '../img/logo_bda.png'
import incube from '../img/incube2.jpg'

const experiencesData = [
    {
        id: 1,
        date: 'Depuis janvier 2021 - ',
        title: 'Developpeur front',
        linkTo: '#incube',
        logo: incube,
        description: 'Developpement d\' applications React pointant sur différentes API chez Incube à Paris.'
    },
    {
        id: 4,
        date: 'Juin 2020 - janvier 2021',
        title: 'Developpeur front et back',
        linkTo: '#tribz',
        logo: tanke,
        description: 'Developpement from scratch d\'une application en React pointant sur deux API différentes (Postgres et Mongo) à l\'agence digitale Tanke à Paris.'
    },
    {
        id: 2,
        date: 'Avril 2020 - Juin 2020',
        title: 'Developpeur front',
        linkTo: '#solidarity',
        logo: solidarity,
        description: 'Projet d\'un mois marquant la fin de la formation à l\'école O\'Clock en Node React'
    },
    {
        id: 3,
        date: 'Juillet 2019 - Septembre 2019',
        title: 'Developpeur wordpress',
        linkTo: '#boutiquedesanges',
        logo: bda,
        description: 'Developpement de la nouvelle version du site vitrine de la Boutique des Anges sous Wordpress.'
    }
];

export default experiencesData;