function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  for (var i=0; i < arr.length; i++) {  //checkx the length of the 1st array
    for (var j=0; j < arr[i].length; j++) {  //checkx the length of the 2nd array
      product *= arr[i][j];  //i references the outer array, j references the inner array
    }
  }
    // Only change code above this line
    return product;
  }
  
 var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
 console.log(product)