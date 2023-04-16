const form = document.getElementById('my-form');
let statusBotao = document.getElementById('my-form-status');

function retornaCorBotao() {
    statusBotao.classList.remove('formcontato__mensagemEnviada');
    statusBotao.innerHTML = "Enviar Mensagem";
    statusBotao.style.maxWidth = "20rem"
}

async function handleSubmit(event) {
    event.preventDefault();


    const formData = new FormData(form);

    const data = new Object();
    data.name = formData.get('nome');
    data.email = formData.get('email');
    data.assunto = formData.get('assunto');
    data.mensagem = formData.get('mensagem');

    // console.log(data);

    fetch('https://formspree.io/f/xrgvozjb', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            statusBotao.innerHTML = `Obrigado ${data.name}. Retornarei o mais rápido possível.`
            statusBotao.style.maxWidth = "100%"
            statusBotao.classList.add('formcontato__mensagemEnviada');
            form.reset();
            setTimeout(retornaCorBotao, 10000);
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    statusBotao.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    statusBotao.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        statusBotao.innerHTML = "Oops! There was a problem submitting your form"
    });

}

form.addEventListener('submit', handleSubmit);
