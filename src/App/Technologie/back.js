import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Card } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

// == technology
const techonologies = [
    {
        id: 1,
        name: 'Node',
        value: 70
    },
    {
        id: 2,
        name: 'Express',
        value: 80
    },
    {
        id: 3,
        name: 'Postgres',
        value: 70
    },
    {
        id: 4,
        name: 'Mongo',
        value: 70
    },
    {
        id: 5,
        name: 'Sequelize',
        value: 70
    },
    {
        id: 6,
        name: 'Sqitch',
        value: 70
    },
]

const useStyles = makeStyles((theme) => ({
    containerProfilCard: {
    //   display: 'flex',
    //   [theme.breakpoints.down('xs')]: {
    //     width: '250px',
    //   },
    backgroundColor: '#FFFFFF',
    padding: '0.8em',
    marginBottom: '0.5em',
    '& h3': {
        textTransform: 'uppercase',
        fontSize: '14px',
        margin: 0,
        marginBottom: '0.5em'
    },
    '& div': {

        fontSize: '12px',
        margin: 0,
        marginBottom: '0.5em'
    }
    },
    containerTechno: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

}));



const TechnologyCard = () => {
    const classes = useStyles();
    const technologyJSX = techonologies.map((t) => {
        return (
            <div className={classes.containerTechno}>
                <div>
                     {t.name}
                </div>
                <LinearProgress
                variant="determinate"
                size={40}
                value={t.value}
                style={{width: '75%'}}
                />
            </div>
        )
    });
    return (
        <Card className={classes.containerProfilCard}>
           <h3>Back end</h3>
           <div>
               {technologyJSX}
           </div>
        </Card>
    );
};

export default TechnologyCard;