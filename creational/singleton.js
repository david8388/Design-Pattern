const president = (function() {
  const presidentsPrivateInformation = 'Super private'

  const name = 'Turd Sandwitch'

  const getName = () => name

  return {
    getName
  }
}())

console.log(president.getName())
console.log(president.name)
console.log(president.presidentsPrivateInformation)
