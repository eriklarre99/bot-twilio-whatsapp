// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
        // mediaUrl: ["https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"],
         from: 'whatsapp:+14155238886',
         body: 'Hola Perra, respondeme soy tu bot',
         to: 'whatsapp:+595985739617'
       })
      .then(message => console.log("id del mj: ", message.sid));