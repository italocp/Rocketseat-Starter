

function criar() {
  let body = document.querySelector('#app')
  let div = document.createElement('div')
 
  div.setAttribute('onmouseout', 'saiu()')
  div.setAttribute('id', 'res')

  body.appendChild(div)
  div.onmouseenter = function () {
    div.style.backgroundColor = getRandomColor()
  }
  div.onmouseout = function () {
    div.style.backgroundColor = 'red'
  }
}
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}