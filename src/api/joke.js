const axios = require('axios');
const { log, error } = require('console');

module.exports = axios.get('http://api.icndb.com/jokes/random', {
  responseType: 'json',
})
  .then(response => log(response.data.value.joke))
  .catch(err => error(err));
