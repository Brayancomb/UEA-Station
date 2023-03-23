const express = require('express');
const axios = require('axios');

const router = express.Router()

router.get('/', (req, res) => res.status(200).send("Another Test"))

router.get('/1', (req, res) => res.status(200).send(`${process.env.DEEZER_APP_NAME}/track`))

module.exports = router;