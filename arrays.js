var chocolatebars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element)
{
  return array.unshift(element)
}

function destructivelyAddElementToBeginningOfArray(array,element)
{
  
  [element, ...array]
  
}

function addElementToEndOfArray(array,element)
{
  return array.push(element)
}

function destructivelyAddElementToEndOfArray(array,element)
{
  [...array,element]
}
