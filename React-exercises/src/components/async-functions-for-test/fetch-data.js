const fetch = require('node-fetch');


const getPeoplePromise = fetch => {
  return fetch('https://swapi.co/api/people')
  .then(response => response.json())
  .then(data => {
    count: data.count
    results: data.results
  })
};

// Get Data using Async 

const getPeopleAsync = async (fetch) => {
  const getRequest = await fetch('https://swapi.co/api/people');
  const data = await getRequest.json();
    count: data.count
    results: data.results
};

module.exports = {
  getPeoplePromise,
  getPeopleAsync
};
