var anosEstudos = 7

function anos() {
  if(anosEstudos <= 1) {
    console.log('Iniciante')
  }else if(anosEstudos <= 3) {
    console.log('Intermediario')
  }else if(anosEstudos <= 6) {
    console.log('Avançado')
  }else {
    console.log('Jedi Master')
  }
}
anos()