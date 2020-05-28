import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
  if(!confirmed){
    return 'Loading....';
} 
/* console.log(props); */
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom> Infected</Typography>
                        <Typography variant="h3">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary" variant="body1">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="subtitle1">Number of confirmed cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom> Recovered</Typography>
                        <Typography variant="h3">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary" variant="body1">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom> Deceased</Typography>
                        <Typography variant="h3">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary" variant="body1" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deceased due to COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card, styles.predicted)}>
                    <CardContent>
                        <Typography color="textSecondary" variant="h4" gutterBottom>Predicted Cases</Typography>
                        <Typography variant="h3">
                            <CountUp start={0} end={confirmed.value*10} duration={2.5} separator=","></CountUp>
                        </Typography>
                        <Typography color="textSecondary" variant="body1">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of predicted cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div> 
    )

} 
export default Cards;