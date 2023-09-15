  //Comparison with the Greater Than Operator
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


  //logical OR operator
  function testLogicalOr(val) {
    if (val > 20 || val < 10) {
      return "Outside";
    }
    return "Inside";
  }
 console.log(testLogicalOr(15));


 //else statement
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