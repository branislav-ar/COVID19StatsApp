import axios from "axios";
import { filter } from "rxjs";

/* function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
} */

const url = 'http://127.0.0.1:9000/COVID-19/read';

export const fetchData = async (country) => {

    let changabelUrl = url;

    if(country) {
        changabelUrl = `${url}/${country}`;
    }
    else {
        changabelUrl = `${url}/USA`;
    }
        try {
            const { data: {name, totalCases, activeCases, deaths, recovered, updatedAt} } = await axios.get(changabelUrl);
    
            const modifiedData =  { 
                name,
                totalCases,
                activeCases,
                deaths,
                recovered,
                updatedAt
            }
            return modifiedData;
            
        }
        catch(error) {
            console.log(error);
        }
}

export const fetchDataByPercentage = async (value) => {
    try{

        const { data } = await axios.get(url);
        const filteredData = data.filter(country => country.deaths*100 / country.totalCases >  value);
        
        /*

            x - commonly accepted alarming mortality rate

            deaths : x  =  totalCases : 100
            deaths*100 = x*totalCases
            x = deaths*100 / totalCases

        */


        return filteredData.map((country) => {
            return country.name;
        })

    }
     catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(url)

        return data.map((country) => {
            return country.name;
        })

    } catch (error) {
        console.log(error);
    }
}