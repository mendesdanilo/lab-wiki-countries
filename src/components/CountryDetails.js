import React from 'react';
import axios from 'axios';

class CountryDetails extends React.Component {
  state = {
    match: '',
    location: '',
    history: '',
  };

  //Component LifeCycle - Lifecycle events
  async componentDidMount() {
    console.log('In Component Did mount');
    //Make a call to an API to get a project detail

    //Get the id of the project from the URL
    //After I get the ID - Get the project
    //Set the state with the project

    //<= id is the id I have on my route: /projects/:id ^
    console.log(
      'projectID that comes from the URL',
      this.props.match.params.id
    );
    //Finding the project on projectsJSON based on the id
    //that comes from the URL
    const countryId = this.props.match.params.id;
    const country = await axios.get(
      `https://restcountries.eu/rest/v2/alpha/${countryId}`
    );
    this.setState({
      name: country.data.name,
      capital: country.data.capital,
      area: country.data.area,
      borders: country.data.borders,
    });
  }

  componentDidUpdate() {}

  render() {
    console.log('In Render');
    const { name, capital, area, borders } = this.state;
    return (
      <>
        <h3>{name}</h3>
        <h4>{capital}</h4>
        <p>{area}</p>
        <p>{borders}</p>
      </>
    );
  }
}

export default CountryDetails;
