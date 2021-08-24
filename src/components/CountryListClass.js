import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CountryListClass extends React.Component {
  state = {
    countries: [],
  };

  async componentDidMount() {
    const response = await axios.get(`https://restcountries.eu/rest/v2/all`);
    this.setState({
      countries: response.data,
    });
  }

  render() {
    return (
      <>
        <h1>Countries</h1>
        <ul>
          {this.state.countries.map((country) => {
            return (
              <li>
                <Link to={`/${country.alpha3code}`}> {country.name} </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CountryListClass;
