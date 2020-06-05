import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{cases, recovered, deaths, updated}}) => {
    if (!cases){
        return "Loading...";
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
            <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>Infected</Typography>
                        <Typography variant="h3">
                        <CountUp start={0} end={cases} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary" variant="body1">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="subtitle1"> Confirmed Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>Recovered</Typography>
                        <Typography variant="h3">
                        <CountUp start={0} end={recovered} duration={2.5} separator=","></CountUp>
                            </Typography>
                        <Typography color="textSecondary" variant="body1">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="subtitle1"> Recovered Cases</Typography>
                        <Typography className={styles.typographFont}> *Does not apply to States</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>Deceased</Typography>
                        <Typography variant="h3">
                        <CountUp start={0} end={deaths} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary" variant="body1">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="subtitle1"> Deceased Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.predicted)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>Predicted</Typography>
                        <Typography variant="h3">
                        <CountUp start={0} end={cases*10} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary" variant="body1">{new Date(updated).toDateString()}</Typography>
                        <Typography variant="subtitle1"> Predicted Cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div> 
    )

} 
export default Cards;