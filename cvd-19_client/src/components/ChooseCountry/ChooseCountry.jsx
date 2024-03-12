import React, { useState, useEffect } from 'react';
import styles from './ChooseCountry.module.css';
import { FormControl, InputLabel, MenuItem , Select } from '@material-ui/core';
import { fetchCountries } from '../../api';

const ChooseCountry = ({ handleCountryChange }) => {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }

        fetchAPI();

    }, [setFetchedCountries]);

    return(
        <FormControl fullWidth variant="filled" color='primary' sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>Country</InputLabel>
            <Select
                defaultValue='USA'
                onChange={(e) => handleCountryChange(e.target.value)}
            >
                {
                fetchedCountries.map((country, i) =>
                    <MenuItem key={i} value={country}>
                        {country}
                    </MenuItem> )
                }
            </Select>
        </FormControl>
    )
}

export default ChooseCountry;