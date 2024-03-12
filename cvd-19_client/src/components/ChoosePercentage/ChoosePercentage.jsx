import React from 'react';
import styles from './ChoosePercentage.module.css';
import { TextField } from '@material-ui/core';

const ChoosePercentage = ({ handleSearchChange }) => {

    return(
        <TextField  fullWidth id="filled-basic" label="Commonly accepted alarming mortality rate..." variant="filled"
                    defaultValue={1}            
                    onChange={(e) => handleSearchChange(e.target.value)}
        />
    )
}

export default ChoosePercentage;