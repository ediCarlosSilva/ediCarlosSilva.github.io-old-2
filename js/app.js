import {valida} from './validate.js';

const inputNome = document.querySelector('#nome');
const inputLabelNome = document.querySelector('#inputLabelNome');
const mensagemErroNome = document.querySelector('.mensagem-erro-nome');

const inputAssunto = document.querySelector('#assunto');
const inputLabelAssunto = document.querySelector('#inputLabelAssunto');
const mensagemErroAssunto = document.querySelector('.mensagem-erro-assunto');

const inputEmail = document.querySelector('#email');
const inputLabelEmail = document.querySelector('#input__label--email');
const mensagemErroEmail = document.querySelector('.mensagem-erro-email');

const textareaMensagem = document.querySelector('#mensagem');
const labelTextareaMensagem = document.querySelector('#labelTextareaMensagem');
const mensagemErroTextarea = document.querySelector('.mensagem-erro-textarea');


inputEmail.addEventListener('blur', (event) => {

    if (event.target.validity.typeMismatch) {
        inputEmail.classList.add('formcontato__input--invalido');
        inputLabelEmail.classList.add('input-label--invalido');
        mensagemErroEmail.style.visibility = "visible";
    } else {
        inputEmail.classList.remove('formcontato__input--invalido');
        inputLabelEmail.classList.remove('input-label--invalido');
        mensagemErroEmail.style.visibility = "hidden";
    }

})

textareaMensagem.addEventListener('keyup', (evento) => {
    
    if (textareaMensagem.value.length > 300) {
        textareaMensagem.classList.add('formcontato__input--invalido');
        labelTextareaMensagem.classList.add('input-label--invalido');
        mensagemErroTextarea.style.visibility= "visible";
    } else {
        textareaMensagem.classList.remove('formcontato__input--invalido');
        labelTextareaMensagem.classList.remove('input-label--invalido');
        mensagemErroTextarea.style.visibility= "hidden";
    }
});


inputNome.addEventListener('keyup', (evento) => {
    // console.log(inputNome.value.length);
    if (inputNome.value.length > 50) {
        inputNome.classList.add('formcontato__input--invalido');
        inputLabelNome.classList.add('input-label--invalido');
        mensagemErroNome.style.visibility= "visible";
    } else {
        inputNome.classList.remove('formcontato__input--invalido');
        inputLabelNome.classList.remove('input-label--invalido');
        mensagemErroNome.style.visibility= "hidden";
    }
});


inputAssunto.addEventListener('keyup', (evento) => {
    // console.log(inputNome.value.length);
    if (inputAssunto.value.length > 50) {
        inputAssunto.classList.add('formcontato__input--invalido');
        inputLabelAssunto.classList.add('input-label--invalido');
        mensagemErroAssunto.style.visibility= "visible";
    } else {
        inputAssunto.classList.remove('formcontato__input--invalido');
        inputLabelAssunto.classList.remove('input-label--invalido');
        mensagemErroAssunto.style.visibility= "hidden";
    }
});