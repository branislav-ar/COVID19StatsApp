import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardActionArea, CardMedia, CardActions, Button, Grid } from '@material-ui/core';
import styles from './CovidPassList.module.css';
import cx from 'classnames';
import { fetchDataByPercentage } from '../../api';
import { BehaviorSubject, debounceTime, distinctUntilChanged, mergeMap, from } from 'rxjs';

const CovidPassList = ({ searchInput }) => {

    const [results, setResults] = useState([]);

    const useObservable = (observable, setter) => {
        useEffect(() => {
            let subscription = observable.subscribe(result => {
                setter(result);
            });

            return() => subscription.unsubscribe();
        }, [observable, setter]);
    };

    let SearchSubject = new BehaviorSubject('');
    let SearchResultObservable = SearchSubject.pipe(
        debounceTime(1400),
        distinctUntilChanged(),
        mergeMap(val => from(fetchDataByPercentage(searchInput)))
    );

    useObservable(SearchResultObservable, setResults);

    return (
        <Card sx={{ maxWidth: 345 }} >
            <CardActionArea onClick={ () => window.open("https://euprava.gov.rs/usluge/6962", "find out more!")}>
                <CardMedia
                    component="img"
                    height="100"
                    image="covidPassImg.jpg"
                    alt="covid pass"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    COVID PASS NEEDED FOR:
                </Typography>
                <div className={styles.list}>
                {
                    results.map((country, i) =>
                    <Typography variant="body1" className={styles.listEl} key={i} value={country}>
                        { country }
                    </Typography> )
                }
                </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={ () => window.open("https://euprava.gov.rs/usluge/6962", "find out more!") }>
                    FIND OUT MORE!
                </Button>
            </CardActions>
            </Card>
    )
}

export default CovidPassList;