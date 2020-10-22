let checkIdade = function (idade) {
  return new Promise(function (resolve, reject) {
    
    if (idade > 18) {
      resolve(setTimeout(function () {
        console.log('Maior que 18')
      },2000))
    } else {
      reject(setTimeout(function () {
        console.log('Menor que 18')
      },2000))
    }
  })
}

checkIdade(23)
  .then(function (response) {
    return response
  })
  .catch(function (error) {
    return error
  })