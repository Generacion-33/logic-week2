require('dotenv').config()
const axios = require('axios');
const { deleteUser } = require('../exercices/8-Eliminar-un-usuario/deleteUser');

axios.post(
  `${process.env.URL}/exercice8`,
  { deleteUser: deleteUser.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
