const router = require('express').Router();
require('dotenv').config()

router.get('/', (req, res, next) => {
  res.render('index')
})


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

router.post('/message', async (req, res, next) => {
    const { remitente, mensaje, mobile } = req.body;

    const mj = `🕵️‍♂️ *Remitente:* ${remitente} \n\n📩 *Mensaje:* ${mensaje}
    \n📱 *Dispositivo:* ${mobile}`;
    console.log(mj);

    client.messages
      .create({
        // mediaUrl: ["https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"],
         from: 'whatsapp:+14155238886',
         body: mj,
         to: 'whatsapp:+595985739617'
       })
      .then(message => console.log("id del mj: ", message.sid));

    await res.json(mensaje);
})

module.exports = router ;