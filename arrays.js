var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

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
  return array.shift()
}

function removeElementFromBeginningOfArray(array)
{
  
  array.slice(0)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop()
  
  return array
}

function removeElementFromEndOfArray(array)
{
  array.slice(0, array.length - 1)
  
  return array
}
