const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.render('index')
})


const accountSid = 'AC4386bc82b68e7caa480c4a5e05a3b720';
const authToken = '34f4e1710d9845f6f2e27cd39c7e58ed';
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