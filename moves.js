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
  switch (rover.direction) {
    case "N":
      if (rover.y <= 0) {
        console.error("You cannot move in this direction!");
        break;
      }

      rover.travelLog.push({
        x: rover.x,
        y: rover.y,
      });
      rover.y--;
      break;

    case "W":
      if (rover.x <= 0) {
        console.error("You cannot move in this direction!");
        break;
      }

      rover.travelLog.push({
        x: rover.x,
        y: rover.y,
      });
      rover.x--;
      break;

    case "S":
      if (rover.y >= 9) {
        console.error("You cannot move in this direction!");
        break;
      }

      rover.travelLog.push({
        x: rover.x,
        y: rover.y,
      });
      rover.y++;
      break;

    case "E":
      if (rover.x >= 9) {
        console.error("You cannot move in this direction!");
        break;
      }

      rover.travelLog.push({
        x: rover.x,
        y: rover.y,
      });
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
