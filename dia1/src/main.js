import './style.css'

const app = document.querySelector('[data-js="app"]')

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const onOff = document.querySelector('[data-js="onOff"]')

onOff.addEventListener('click', (event) => {
  event.preventDefault();
  app.classList.toggle('hide');
})
