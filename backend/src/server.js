const app = require('./app')
const dotenv =require('dotenv')

dotenv.config();

// Inicia o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000')
    console.log('http://localhost:3000')
    console.log('http://localhost:3000/1')
    console.log('http://localhost:3000/1')
    console.log('http://localhost:3000/track/1')
  })
