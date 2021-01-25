const user0 = {
  name: 'Vasiliy',
  age: 25,
}

const user1 = {
  name: 'Olga',
  age: 25,
}

module.exports = {
  user: user0,

  sayHello() {
    console.log(`Hello from ${user0.name}`)
  },
}
