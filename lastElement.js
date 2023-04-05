// write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.
// lastElement([3,5,7]) //7
// lastElement([1]) //1
// lastElement([]) //null

// DEFINE YOUR FUNCTION BELOW:
let array = (x, y, z);
function lastElement(array)
    {
        return array.length ?
        array[array.length - 1] : null;
    }
