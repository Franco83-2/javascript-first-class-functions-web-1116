function receivesAFunction(callback) {
  callback()
}

function returnsANamedFunction() {
  newFunction = () => console.log("does nothing")
  return newFunction
}

function returnsAnAnonymousFunction() {
  return () => console.log('I do nothing!')
}
