// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  distance = 43;
  let hq = 42;
  let distanceInBlocks;
    distanceInBlocks = distance - hq;
    return distanceInBlocks;
  
  // return `${distanceInBlocks}, blocks`;
  
}

function distanceFromHqInBlocks(distance) {
  distance = 50;
  let hq = 42;
  let distanceInBlocks;

    distanceInBlocks = distance - hq;

    return distanceInBlocks;
  
  // return `${distanceInBlocks}, blocks`;
  
}

function distanceFromHqInBlocks(distance) {
  distance = 38;
  let hq = 42;
  let distanceInBlocks;
    distanceInBlocks = distance - hq;
    return distanceInBlocks;
  
  // return `${distanceInBlocks}, blocks`;
  
}
function distanceFromHqInFeet(){
  let distanceInBlocks = distanceFromHqInBlocks(someValue)
        
  let distanceInFeet;

  distanceInBlocks = 43
  distanceInFeet = distanceInBlocks * 264

}

function distanceTravelledInFeet(start, destination){
  let value1 = 38;
  let value2 = 34;

  let distanceTravelledInFeet = (value1 - value2) * 264
  return distanceTravelledInFeet

}

// `calculatesFarePrice`: Given the same starting and ending block as the
//   previous test (_hint hint_), return the fare for the customer. The first four
//   hundred feet are free. For a distance between 400 and 2000 feet, the price is
//   2 cents per foot (not including 400, which are free!). Then Scuber charges a
//   flat fare for a distance over 2000 feet and under 2500 feet.
//   Finally, Scuber does not allow any rides over 2500 feet — the function returns
//   `'cannot travel that far'` if a ride over 2500 feet is requested.

//   ```js
//   function calculatesFarePrice(start, destination) {
//     //returns the fare for the customer
//   }

function calculatesFarePrice(start, destination){

  let distance = distanceTravelledInFeet(start, destination)
  let fare;

  
  if(distance<=400){
      fare = 0
      return fare;
  }
  else if (distance> 400 && distance <2000){

    fare = (distance-400) * 0.2
    return fare;
  }
  else if(distance > 2000 && distance <= 2500){
    
       fare = (((distance -2000) * 25) + (1600 * 0.2))
       return fare;
  }
  else if (distance > 2500){
    return 'cannot travel that far'
  }

}
