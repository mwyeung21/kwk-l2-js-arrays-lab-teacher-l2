// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name)
{
  drivers.push(name) //append driver to end of driver array
}

function destructivelyPrependDriver(name)
{
  drivers.unshift(name) // add name to beginnign of driver array
}

function destructivelyRemoveLastDriver()
{
  drivers.pop() // remove last driver in array
}

function destructivelyRemoveFirstDriver()
{
  drivers.shift() //remove first driver in array (all these and above functions are mutating)
}

function appendDriver(name)
{
  return drivers.concat(name) //non mutating function
}

function prependDriver(name)
{
  //name = [name]
  return name.concat(drivers) 
}

function removeLastDriver()
{
  return drivers.slice(0,drivers.length-1)
  //mutates
}

function removeFirstDriver()
{
  return drivers.slice(1,drivers.length)
  //mutates
}
