const turnLeft = (rover) => {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
    default:
      rover.direction = "N";
      break;
  }
};

const turnRight = (rover) => {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "S";
      break;
    default:
      rover.direction = "N";
      break;
  }
};

const moveForward = (rover) => {
  rover.travelLog.push({
    x: rover.x,
    y: rover.y,
  });

  switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "W":
      rover.x--;
      break;
    case "S":
      rover.y++;
      break;
    case "E":
      rover.x++;
      break;
    default:
      break;
  }
};

module.exports = {
  turnLeft,
  turnRight,
  moveForward,
};
