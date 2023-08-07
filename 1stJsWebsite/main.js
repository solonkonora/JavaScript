const myHeading = document.querySelector("h1");
myHeading.textContent = "FireFox is Good";

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "firefox1.png") {
    myImage.setAttribute("src", "profile.png");
  } else {
    myImage.setAttribute("src", "firefox1.png");
  }


//adding a personalized welcome message
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* -The setUserName() function contains a prompt() function
-prompt() function asks the user to enter data, and storing it in a variable after the user clicks OK.
-the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. 
-We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name. 
-Finally, we set the textContent of the heading to a string, plus the user's newly stored name*/
// function setUserName () {
//     const myName = prompt("please enter name");
//     localStorage.setItem = ("name", myName);
//     myHeading.textContent = 'Firefox is good, ${myName}';
// }

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Firefox is good, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Firefox is good, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
//   };
}
};