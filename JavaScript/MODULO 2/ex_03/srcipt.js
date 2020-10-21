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