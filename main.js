import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

// toggle text
document.getElementById('darkmode-toggle').addEventListener('click')

let h1 = document.getElementById('logo');
  let ausgabe = document.getElementById('logo');
  h1.addEventListener('mouseover', mouseOver);
  h1.addEventListener('mouseout', mouseOut);

  function mouseOver() {
    ausgabe.innerHTML = ' ';
    h1.innerHTML = 'Shop';
  }

  function mouseOut() {
    ausgabe.innerHTML = ' ';
	h1.innerHTML = 'Logo';
  }