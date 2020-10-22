let user = document.querySelector('#user')
//user = ${user}

let ul = document.querySelector('#ul')

function add() {

  if (user.value.length == 0) {
    alert('Error: adicione um usuario valido')
  } else {
    ul.innerHTML = `<li>Carregando...</li>`
    axios.get(`https://api.github.com/users/${user.value}/repos`)
    .catch(function (error) {
      if (error) {
        alert('erro')
      }
    })
    .then(function (response) {
      ul.innerHTML = ''

      for (repo of response.data) {
        ul.innerHTML += `<li>${repo.name}</li>`
      }

      })
  }
  user.value = ''
  user.focus()
}

