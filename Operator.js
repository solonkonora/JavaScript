  //1 Comparison with the Greater Than Operator
  function testGreaterThan(val) {
    if (val > 100) {  
      return "Over 100";
    }
    if (val > 10) {  
      return "Over 10";
    }
    return "10 or Under";
  }
  console.log(testGreaterThan(10));


  //2 logical OR operator
  function testLogicalOr(val) {
    if (val > 20 || val < 10) {
      return "Outside";
    }
    return "Inside";
  }
 console.log(testLogicalOr(15));


 //3 else statement
 function testElse(val) {
  let result = "";
  if (val > 5 && val <= 10) {
    result = "Bigger than 5";
  }
 else {
    result = "5 or Smaller";
  }
  return result;
}
console.log(testElse(4));


//4 else if statement
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
else if (val < 5) {
    return "Smaller than 5";
  }
else{  
  return "Between 5 and 10";
}
}
console.log(testElseIf(7));


//5 Logical Order in If Else Statements
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5"
 
  } else if (val < 10) {
    return "Less than 10";;
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(7));