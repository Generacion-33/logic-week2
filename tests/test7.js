require('dotenv').config()
const axios = require('axios');
const { getEmails } = require('../exercices/7-Obtener-los-correos/getEmails');

axios.post(
  `${process.env.URL}/exercise7`,
  { getEmails: getEmails.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
