import React from 'react';
import './App.css';
import axios from 'axios';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
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
      <div className="App">
        <CountryList countries={this.state.countries} />
        <Switch>
          <Route path="/:countryCode" component={CountryDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
