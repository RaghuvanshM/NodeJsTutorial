let user = { name: 'sachin', age: 50, add: 'mumbai' };

let allKeys = Object.keys(user);
console.log(allKeys)

let allValues = Object.values(user);
console.log(allValues)

let allEntries = Object.entries(user);
console.log(allEntries);

let userObj = Object.fromEntries(allEntries) // entries --> object
console.log(userObj)