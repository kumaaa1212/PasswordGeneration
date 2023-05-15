
const result = document.getElementById('result');
const showbtn = document.getElementById('showbtn');
const slider = document.getElementById('slider');
const passlength = document.getElementById('password-length');
const numbersCheckbox = document.getElementById('numbersCheckbox');
const symbolsCheckbox = document.getElementById('symbolCheckbox');

function showpass() {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!#$%&()';
  let password = '';
  let seed = letters + letters.toUpperCase();
  if (symbolsCheckbox.checked) {
    seed += symbols;
  }
  if (numbersCheckbox.checked) {
    seed += numbers;
  }
  for (let i = 0; i < slider.value; i++) {
    password += seed[Math.floor(Math.random() * seed.length)];
  }
  result.textContent = password;
}


showpass();
showbtn.addEventListener('click', () => {
  showpass();
});

slider.addEventListener('input', () => {
  passlength.textContent = slider.value;
})


// constを書くいち。letかconstか区別