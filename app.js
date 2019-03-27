const form = document.getElementById('registrar');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  console.log(input.value);
});