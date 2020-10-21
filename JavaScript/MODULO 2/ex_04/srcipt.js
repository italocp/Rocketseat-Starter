let body = document.querySelector('#app')

let ul = document.createElement('ul')
body.appendChild(ul)

let nomes = [ 
  "Diego",
  "Gabriel",
  "Lucas"
]

let p = document.createElement('p')
ul.appendChild(p)

let Ptxt = document.createTextNode('')
p.appendChild(Ptxt)

p.innerHTML = `<li>${nomes[0]}</li>`
p.innerHTML += `<li>${nomes[1]}</li>`
p.innerHTML += `<li>${nomes[2]}</li>`

function add() {
  let nome = document.querySelector('#nome');

  function inlist(n, l) {
    if (l.indexOf(n) !== -1) {
      return true;
    }
  }

  if (nome.value.length == 0 || inlist(nome.value, nomes)) {
    alert('Erro: Nenhum nome adicionado ou já encontrado na lista.')
  } else {
    nomes.push(nome.value)
    let tam = nomes.length
    let last = tam - 1

    p.innerHTML += `<li>${nomes[last]}</li>` 
  }
  nome.value = ''
  nome.focus()
}
