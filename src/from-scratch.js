const coolGreeting = (person) => {
  if (person.isCool)
    { return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
 person.age += 1
};

const becomeSecretAgent = (person, spyHandle) => {
   delete person.name

 person['spyHandle']= spyHandle

};

const carMaker = (name, maker, year) => {
  return {
  name: name,
  maker: maker,
  year: year,
  needsOilChange: false
  } 

};

const weAreNotFriends = (person) => {
  // return person.friends.pop()  
  const removedFriends = person.friends.pop()
  return removedFriends

};

const listHobbies = (person) => {
  person.hobbies.forEach(hobby =>
     {console.log(`${person.name} likes ${hobby}.`)
  })
};

const getNextOpponent = (team) => {
 
};

const listAllKeys = (obj) => {
 const allKeys = Object.keys(obj)
  return allKeys

};

const listAllValues = (obj) => {
  const everyValues = Object.values(obj)
  return everyValues
};

const convertToMatrix = () => {
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
