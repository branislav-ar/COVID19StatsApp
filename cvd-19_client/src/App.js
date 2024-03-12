import React from 'react';
import { Cards, Chart, ChooseCountry, ChoosePercentage, CovidPassList, Title } from './components';
import styles from './App.module.css';
import { fetchData, fetchCountriesALL, fetchDataByPercentage } from './api';
import { BehaviorSubject } from 'rxjs';

class App extends React.Component { 

    /*  React pravi konstruktor u pozadini pa nam sintaksa 
    direktno za njega nije neophodna. */
    state = {
        data: {},
        country: '',
        searchInput: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        const inputValue = "";

        this.setState({data: fetchedData, searchInput: inputValue });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        /* console.log(fetchedData); */
        this.setState({data: fetchedData, country: country});
    }

    handleSearchChange = async (value) => {
        /* console.log(value); */
        this.setState({ searchInput: value });
    }

    render() {

        const { data, country, searchInput } = this.state;

        return (
            <div className={styles.container}>
                    <div className={styles.containerNaslov}>
                        <Title />
                    </div>
                    <ChooseCountry handleCountryChange={this.handleCountryChange} />
                    <ChoosePercentage handleSearchChange={this.handleSearchChange}/>
                    <div className={styles.containerInfo}>
                        <Cards data={data}/>
                        <Chart data={data} country={country}/>
                    </div>
                    <div className={styles.containerCovidPass}>
                        <CovidPassList searchInput={searchInput} />
                    </div>
                </div>
        )
    }
}
 
export default App;