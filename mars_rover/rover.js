var myRover = {
  position: [0,0],
  direction: 'N'
};

var grid = [[9,8,7,6,5,4,3,2,1,0],[9,8,7,6,5,4,3,2,1,0]];


function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

goForward(myRover);


function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

goBackwards(myRover);



function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
		console.log("New Rover Direction: " + rover.direction);
}



function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
		console.log("New Rover Direction: " + rover.direction);
}



var instruction = prompt("In which direction should the mars rover move? Choose 'f','b','l' or 'r'.");

function move(rover) {
  switch (instruction) {
    case 'f':
    goForward(rover);
    if (rover.position[0] > 9) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[1] > 9) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[0] < 0) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[1] < 0) {
      prompt("Choose another direction.");
      move(myRover);
    }
    break;
    case 'b':
    goForward(rover);
    if (rover.position[0] > 9) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[1] > 9) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[0] < 0) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[1] < 0) {
      prompt("Choose another direction.");
      move(myRover);
    }
    break;
    case 'l':
    goForward(rover);
    if (rover.position[0] > 9) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[1] > 9) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[0] < 0) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[1] < 0) {
      prompt("Choose another direction.");
      move(myRover);
    }
    break;
    case 'r':
    goForward(rover);
    if (rover.position[0] > 9) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[1] > 9) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[0] < 0) {
      prompt("Choose another direction.");
      move(myRover);
    } else if (rover.position[1] < 0) {
      prompt("Choose another direction.");
      move(myRover);
    }
    break;
    default:
    prompt("Choose f','b','l' or 'r'.");
    break;
  }
}

move(myRover);
