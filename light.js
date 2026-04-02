let btn = document.querySelector('.switch');
let bg = document.querySelector('body');
let text = document.querySelector('p');

btn.addEventListener('click', function () {
  if (btn.textContent === 'ON') {
    bg.style.background = 'White';
    bg.style.color = 'Black';
    btn.textContent = 'OFF';
    text.textContent = "Thank You For Pressing On Button 🤗"
    // text.style.marginLeft = '3.5rem'
  } else if (btn.textContent === 'OFF') {
    bg.style.background = 'Black';
    bg.style.color = 'White';
    btn.textContent = 'ON';
    text.textContent = 'Please Press the On button It is too Dark here 😰';
  }
});

