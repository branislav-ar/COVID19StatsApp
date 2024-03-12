import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data: {totalCases, activeCases, deaths, recovered, updatedAt}}) => {

    if(activeCases < 0) {
        return 'Loading...';
    }
    else {
        return(
            <div className={styles.container}>
                <Grid container spacing={3} justifyContent="center" className={cx(styles.cardBig)}>
                    <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.totalCases)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>TOTAL CASES</Typography>
                            <Typography variant="h5">
                                    <CountUp start = {0} end = {totalCases} duration = {2} separator = "," />
                                </Typography>
                            <Typography variant="caption" color="textSecondary">Updated on: { new Date(updatedAt).toDateString() }</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                                <Typography variant="h5">
                                    <CountUp start = {0} end = {deaths} duration = {2} separator = "," />
                                </Typography>
                            <Typography variant="caption" color="textSecondary">Updated on: { new Date(updatedAt).toDateString() }</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.activeCases)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>ACTIVE CASES</Typography>
                                <Typography variant="h5">
                                    <CountUp start = {0} end = {activeCases} duration = {2} separator = "," />
                                </Typography>
                            <Typography variant="caption" color="textSecondary">Updated on: { new Date(updatedAt).toDateString() }</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>RECOVERED</Typography>
                                <Typography variant="h5">
                                    <CountUp start = {0} end = {recovered} duration = {2} separator = "," />
                                </Typography>
                            <Typography variant="caption" color="textSecondary">Updated on: { new Date(updatedAt).toDateString() }</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Cards;