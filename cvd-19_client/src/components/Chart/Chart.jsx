import React from 'react';
import styles from './Chart.module.css';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { withTheme } from '@material-ui/core';

const ChartEL = ({ data: {totalCases, activeCases, deaths, recovered }}) => {

    const barChart = (
        <Bar 
            //dinamično + objekat
            data={{
                labels: ['Total cases', 'Active cases', 'Deaths', 'Recovered'],
                datasets: [
                    {
                        label: `People`,
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(115,177,148,255)', 'rgba(237,124,107,255)', 'rgba(237, 214, 130)'],
                        data: [ totalCases, activeCases, deaths, recovered ],
                    },
                ],
            }}
        />
    );
    
    return(
        <div className={styles.container}>
            { barChart }
        </div>
    )
}

export default ChartEL;