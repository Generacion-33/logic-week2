require('dotenv').config()
const axios = require('axios');
const { orderStudentsByScore } = require('../exercices/10-ordena-los-estudiantes-por-calificación/orderStudentsByScore');

axios.post(
  `${process.env.URL}/exercice10`,
  { orderStudentsByScore: orderStudentsByScore.toString() })
  .then(response => {
    const { message } = response.data;
    console.info(message);
  })
  .catch(error => {
    console.error('Hubo un error al comunicarse con la API', error);
  });
