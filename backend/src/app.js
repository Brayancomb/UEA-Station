const express = require('express');
const router = require('./router');
const axios = require('axios')
require("dotenv").config();

const app = express();
app.use(router)

const DEEZER_API_URL = 'https://api.deezer.com'

// Rota de exemplo para buscar informações de uma música
app.get('/track/:id', async (req, res) => {
  const { id } = req.params
  const { data } = await axios.get(`${DEEZER_API_URL}/track/${id}`, {
    params: {
      access_token: process.env.DEEZER_APP_SECRET,
    },
  })
  res.send(data)
})



module.exports = app;