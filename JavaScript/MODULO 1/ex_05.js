var usuarios = [
  {
    nome: 'Diego',
    habilidades: [
      "JavaScript",
      "ReactJS",
      "Redux"
    ]
  },
  {
    nome: 'Gabriel',
    habilidades: [
      "VueJS",
      "Ruby on Rails",
      "Elixir"
    ]
  }
];

function mostrar() {
  console.log(`O ${usuarios[0].nome} possui as habilidades: ${usuarios[0].habilidades[0]}, ${usuarios[0].habilidades[1]}, ${usuarios[0].habilidades[2]}.`)
  console.log(`O ${usuarios[1].nome} possui as habilidades: ${usuarios[1].habilidades[0]}, ${usuarios[1].habilidades[1]}, ${usuarios[1].habilidades[2]}.`)
}
mostrar()