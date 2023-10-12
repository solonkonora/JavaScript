// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
      //creatx a function where when we pass in a name and property, it should the value
    for (var i = 0; i < contacts.length; i++) //iterating through each contact in the for loop
    { 
      if (contacts[i].firstName === name){ //first chrckx if the name is a name on the list
  return contacts[i][prop] || "No Such Entry"
      }
    }
  
  return "No such contact"
  }
  
  var data = lookUpProfile("Akira", "likes");
//   var data = lookUpProfile("Akira", "firstName");
//   var data = lookUpProfile("Akira", "number");
  console.log(data)