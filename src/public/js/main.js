console.log('main.js ok');

const form = document.getElementById('form')


form.addEventListener('submit', async e => {
    e.preventDefault();

    let mobile = await isMobile()

    if (mobile == null || mobile == undefined || mobile == '') {
        mobile = 'No detectado.'
    }
    console.log(mobile[0]);

    // const remitente = document.getElementById('remitente').value
    const mensaje = document.getElementById('mensaje').value

    // if (remitente == '') {
        remitente = 'Anónimo.'
    // }
    const data = { remitente, mensaje, mobile }

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

const isMobile = async () => {
    mobile = await (
        (navigator.userAgent.match(/Android/i)) ||
        (navigator.userAgent.match(/webOS/i)) ||
        (navigator.userAgent.match(/iPhone/i)) ||
        (navigator.userAgent.match(/iPod/i)) ||
        (navigator.userAgent.match(/iPad/i)) ||
        (navigator.userAgent.match(/BlackBerry/i))
    );
    return mobile 
}
