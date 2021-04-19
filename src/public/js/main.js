console.log('main.js ok');

const form = document.getElementById('form')

form.addEventListener('submit', async e => {
    e.preventDefault();

    // const remitente = document.getElementById('remitente').value
    const mensaje = document.getElementById('mensaje').value

    // if (remitente == '') {
        remitente = 'Anónimo.'
    // }
    const data = { remitente, mensaje }

    try {
        const res = await fetch('/message', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })   
        const getData = await res.json(); 
        console.log(getData);
        if (getData == mensaje) {
            document.getElementById('text-info').textContent = "Tu mensaje ha sido enviado con éxito !"
            document.getElementById('text-info').style.color = "#00ffff"
        }
    } catch (error) {
        console.log(error);
    }
    
    form.reset();
})