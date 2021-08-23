import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component {
  state = {
    name: ' ',
    capital: ' ',
    area: ' ',
    borders: ' ',
  };

  fetchCountryDetails = async () => {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${this.props.match.params.countryCode}`
    );
    this.setState({
      name: response.data.name,
      capital: response.data.capital,
      area: response.data.area,
      borders: response.data.borders,
    });
  };

  async componentDidMount() {
    this.fetchCountryDetails();
  }

  async componentDidUpdate() {
    this.fetchCountryDetails();
  }

  render() {
    const { name, capital, area, borders } = this.state;
    return (
      <>
        <h2>Country Details</h2>
        <h3>{name}</h3>
        <h4>Capital: {capital}</h4>
        <p>Area: {area}</p>
        <ul>
          {borders.map((border) => {
            return (
              <li>
                <Link to={`/border`}>{border}</Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CountryDetails;
