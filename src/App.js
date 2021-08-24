import React from 'react';
import './App.css';
import axios from 'axios';
import CountryDetails from './components/CountryDetails';
import CountryListClass from './components/CountryListClass';
import { Route } from 'react-router-dom';

class App extends React.Component {
  // state = {
  //   countries: [],
  // };

  // async componentDidMount() {
  //   const response = await axios.get(`https://restcountries.eu/rest/v2/all`);
  //   this.setState({
  //     countries: response.data,
  //   });
  // }

  render() {
    return (
      <div className="App">
        <div style={{ float: 'left', height: '900px', overflow: 'scroll' }}>
          {/* <CountryList countries={this.state.countries} /> */}
          <CountryListClass />
        </div>
        <div style={{ float: 'right', marginRight: '100px' }}>
          <Route path="/:countryCode" component={CountryDetails} />
        </div>
      </div>
    );
  }
}

export default App;
