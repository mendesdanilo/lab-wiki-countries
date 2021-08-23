import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CountryList extends React.Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    //1. Make the call to the API
    //2. Wait for the response from the API
    //3. Set the state with the response
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    console.log(response.data);
    this.setState({
      countries: response.data,
    });
  }

  render() {
    const { countries } = this.state;
    return (
      <>
        <ul>
          {countries && countries.length ? (
            this.state.countries.map((country) => {
              return (
                <div>
                  <Link to={`/${country.alpha3Code}`}>{country.name}</Link>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </>
    );
  }
}

export default CountryList;
