const menu = document.getElementById('menu')
const saidbar = document.getElementById('saidbar')

console.log(menu, saidbar);

menu.addEventListener('click', function() {
  if (saidbar.style.opacity === '1') {
    saidbar.style.opacity = '0';
  } else {
    saidbar.style.opacity = '1';
  }
});
