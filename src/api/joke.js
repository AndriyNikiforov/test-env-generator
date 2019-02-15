const axios = require('axios');
const { log, error } = require('console');

const getJoke = async () => {
  try {
    return await axios.get('http://api.icndb.com/jokes/random', {
      responseType: 'json',
    });
  } catch (err) {
    return new Error(err);
  }
};

const joke = async () => {
  const response = await getJoke();

  if (response === Error) {
    error(response);
  }

  if (response.data.value.joke) {
    log(response.data.value.joke);
  }
};

module.exports = joke;
