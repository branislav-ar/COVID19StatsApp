import React from 'react';
import styles from './Title.module.css';

const Title = () => {
    return(
        <>
        <div className={styles.naslovContainer}>
            <h1 className={styles.title}>COVID-19 Tracker</h1>
        </div>
        </>
    )
}

export default Title;