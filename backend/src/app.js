const express = require('express');
const router = require('./router');
const axios = require('axios')
require("dotenv").config();

const app = express();
app.use(router)

const DEEZER_API_URL = 'https://api.deezer.com'

// Rota de exemplo para buscar informações de uma música
app.get('/track/:id', async (req, res) => {
  const {id} = req.params
  const url = `${DEEZER_API_URL}/track/${id}`;
  console.log('submmiting=>', url);
  const {data} = await axios.get(url, {
    params: {
      access_token: process.env.DEEZER_APP_SECRET,
    },
  }).catch(e => {
    return {data: e}
  })
  console.log(data)
  res.send(data)
})



module.exports = app;
