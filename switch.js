//Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
    let answer = "";
   
    switch (val) {
  case 1:
      answer = "alpha";
      break;
  case 2:
     answer = "beta";
      break;
  case 3:
      answer = "gamma";
      break;
  case 4:
      answer = "delta";
      break;
  }
    return answer;
  }
  
  console.log(caseInSwitch(1));


  
 
  //3 Multiple Identical Options in Switch Statements
  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
    answer = "Low"
    break;
    case 4:
    case 5:
    case 6:
    answer = "Mid"
    break;
    case 7:
    case 8:
    case 9:
    answer = "High"
    break;
  }
    return answer;
  }
  console.log(sequentialSizes(1));




