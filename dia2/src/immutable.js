const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

const jane = {
  ...john,
  name: 'Jane',
  hobbies: john.hobbies.concat(['Muay Thai', 'Programming']),
}

console.log('John:', john)
console.log('Jane:', jane)
