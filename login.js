'use strict'

let inpEl = document.querySelector('input#password')
let passIcon = document.querySelector('.pass')
let textIcon = document.querySelector('.text')
let btnEl = document.querySelector('button')
let InpUser = document.querySelector('input#username')
let InpPass = document.querySelector('input#password')
let secEl = document.querySelector('section')
let alertEL = document.querySelector('section>p.alert')

textIcon.addEventListener('click', () => {
    inpEl.setAttribute('type', 'text')
    textIcon.classList.toggle('hidd')
    passIcon.classList.toggle('show')
})
passIcon.addEventListener('click', () => {
    inpEl.setAttribute('type', 'password')
    textIcon.classList.toggle('hidd')
    passIcon.classList.toggle('show')
})

btnEl.addEventListener('click', () => {
    alertEL.innerHTML = ''
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-type': 'application/Json' },
        body: JSON.stringify({
            username: `${InpUser.value}`,
            password: `${InpPass.value}`
        })
    })
    .then(res => res.json())
    .then(data => {
        alertEL.innerHTML += 'Mission successful'
        alertEL.style.color = 'green';
    })
    .catch(err => {
        alertEL.innerHTML += 'Mission failed';
        alertEL.style.color = 'red';
    });
});




