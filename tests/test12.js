require('dotenv').config()
const axios = require('axios');
const { findUser } = require('../exercices/12-encuentra-un-usuario-por-su-nombre/findUser');

axios.post(
  `${process.env.URL}/exercice12`,
  { findUser: findUser.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
