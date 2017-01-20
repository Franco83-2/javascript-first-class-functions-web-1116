function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  function newFunction() {
    return "does nothing"
  }
  return newFunction
}

function returnsAnAnonymousFunction() {
  return () => console.log('I do nothing!')
}
