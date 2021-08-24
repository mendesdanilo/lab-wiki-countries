import React from 'react';

function CountryList({ countries }) {
  return (
    <>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => {
          return <li>{country.name}</li>;
        })}
      </ul>
    </>
  );
}

export default CountryList;
