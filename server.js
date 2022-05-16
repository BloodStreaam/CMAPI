// const app = require('./config/express')();
// const port = app.get('port');

// // RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
// app.listen(port, () => {
//   console.log(`Servidor a bombar na porta ${port}`)
// });

const express = require('express')
const app = express()
const port = 8080
const bus = require('./api/routes/busInfo')
const sendEmail = require('./api/routes/sendEmail')

app.use('/bus', bus)
app.use('/sendemail', sendEmail)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})