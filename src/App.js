import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <div className="container">
          <Route path="/countrieslist" component={CountriesList} />
          <Route path="/:id" component={CountryDetails} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
