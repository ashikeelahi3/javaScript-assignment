

function feetToMile(feet) {
  if (feet < 0) {
    return "Length can't be negative. Make sure to give an appropriate value.";
  } else if (typeof feet != "number") {
    return "Invalid input. Please, input an appropriate value.";
  }
  let mile = (feet * 0.000189);
  for (let i = 0; i < 6; i++ ) {
    if (mile.toFixed(i) != 0) {
      return `${feet} feet = ${mile.toFixed(i)} mile`;
    }
  }
  return `${feet} feet = 0 mile`;
}



function woodCalculator(numberOfChair, numberOfTable, numberOfBed) {
  let negative = [];
  let invalid = [];

  let needWood = (numberOfChair + numberOfTable * 3 + numberOfBed * 5);

  if (numberOfChair < 0) {
    negative.push("chair");
  } else if (typeof numberOfChair != "number") {
    invalid.push("chair");
  }


  if (numberOfTable < 0) {
    negative.push("table");
  } else if (typeof numberOfTable != "number") {
    invalid.push("table");
  }

  if (numberOfBed < 0) {
    negative.push("bed");
  } else if (typeof numberOfBed != "number") {
    invalid.push("bed");
  }

  if ((negative.length > 0) && (invalid.length > 0)) {
    return `Invalid input. Make sure to give an appropriate value of ${negative}, ${invalid}`;
  } else if (negative.length > 0) {
    return `The value of ${negative} can't be negative. Make sure to give an appropriate value.`;
  } else if (needWood >= 0) {
    return `You need ${needWood} cubic meter wood.`;
  } else {
    return `Invalid input. Please, input appropriate value of ${invalid}.`;
  }
}



function brickCalculator(numberOfFloor) {
  let needBrick;

  if (typeof numberOfFloor != "number") {
    return "Invalid input. Please, input correct number.";
  }  else if (numberOfFloor < 0) {
    return "Floor can't be negative";
  } else if ((numberOfFloor - parseInt(numberOfFloor)) !== 0){
    return "The floor cannot be the number of fractions."
  } else if (numberOfFloor <= 10) {
    needBrick = numberOfFloor * 15000;
  } else if (numberOfFloor <= 20) {
    needBrick = 150000 + ((numberOfFloor - 10) * 12000);
  } else if (numberOfFloor > 20) {
    needBrick = 150000 + 120000 + ((numberOfFloor - 20) * 10 * 1000);
  }
  return "You need " + needBrick + " bricks.";
}


function tinyFriend(array) {
  let tiny = array[0];
  let tinyArray = [];

  for (let i = 0; i < array.length; i++){
    if (array[i].length === 0) {
      return `Name can't be an empty string.`
    } else if (array[i] === ' ') {
      return `Name can't be a space.`
    } else if (tiny.length > array[i].length) {
      tiny = array[i];
    }
  }

  for (let i = 0; i < array.length; i++){
    let name = array[i];
    if (tiny.length == name.length) {
      tinyArray.push(name);
    }
  }

  if (tinyArray.length == 1) {
    return `Your tiny friend is ${tinyArray}.`
  } else {
    return `Your tiny friends are ${tinyArray}.`
  }
}
