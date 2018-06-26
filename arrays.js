var chocolatebars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element)
{
 
   [element, ...array]
  
  return array
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  
  return array.unshift(element)
  
}

function addElementToEndOfArray(array,element)
{
   [...array,element]
  
   return array
  
}

function destructivelyAddElementToEndOfArray(array,element)
{
  return array.push(element)
 
}

function accessElementInArray(arrary,index)
{
  
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array)
{
  return array.unshift()
}
function removeElementFromBeginningOfArray(array)
{
  return array.shift()
}
