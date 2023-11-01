require('dotenv').config()
const axios = require('axios');
const { mergeData } = require('../exercices/9-Mezclar-datos/mergeData');

axios.post(
  `${process.env.URL}/exercice9`,
  { mergeData: mergeData.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
