//Rover 
var myRover = {
  position: [0,0],
  direction: 'N'
};

//10 x 10 grid
var grid = [
  [9,8,7,6,5,4,3,2,1,0],
  [9,8,7,6,5,4,3,2,1,0]
];


//forward
function goForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };
};

//backward
function goBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  };
};


//left turn
function leftTurn(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W'
      break;
    case 'E':
      rover.direction = 'N'
      break;
    case 'S':
      rover.direction = 'E'
      break;
    case 'W':
      rover.direction = 'S'
      break;
  };
};

//right turn
function rightTurn(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E'
      break;
    case 'E':
      rover.direction = 'S'
      break;
    case 'S':
      rover.direction = 'W'
      break;
    case 'W':
      rover.direction = 'N'
      break;
  };
};




//Move rover
function move(rover) {
  var input = prompt("Choose a direction: 'f','b','r','l'"); 
    switch (input.toLowerCase()) {
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBackward(rover);
        break;
      case 'l':
        leftTurn(rover);
        break;
      case 'r':
        rightTurn(rover);
        break
      default:
        console.log('Invalid input');
        break;
    }
    if (rover.position[0] === 10) {
      rover.position[0] === 9;
      console.log("You can't move the rover in this direction, it is falling of the planet!");
    } else if (rover.position[1] === 10) {
      rover.position[1] === 9;
      console.log("You can't move the rover in this direction, it is falling of the planet!");  
    } else if (rover.position[0] === -1) {
      rover.position[0] === 0;
      console.log("You can't move the rover in this direction, it is falling of the planet!");  
    } else if (rover.position[1] === -1) {
      rover.position[1] === 0;
      console.log("You can't move the rover in this direction, it is falling of the planet!");  
    } 
  console.log("The rovers position is [" + rover.position[0] + "," + rover.position[1] + "] and it is facing in this direction: " + rover.direction);
}


move(myRover);














