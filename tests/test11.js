require('dotenv').config()
const axios = require('axios');

const { findMostCommonAge } = require('../exercices/11-encuentra-la-edad-que-mas-se-repite/findMostCommonAge');

axios.post(
  `${process.env.URL}/exercice11`,
  { findMostCommonAge: findMostCommonAge.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
