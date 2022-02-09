const prompt = require("prompt");
const { turnLeft, turnRight, moveForward, moveBackward } = require("./moves");

const grid = [
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
];

const rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};

const pilotRover = (commands) => {
  for (let i = 0; i < commands.length; i++) {
    switch (commands[i].toLowerCase()) {
      case "l":
        turnLeft(rover);
        break;

      case "r":
        turnRight(rover);
        break;

      case "f":
        moveForward(rover);
        break;

      case "b":
        moveBackward(rover);
        break;

      default:
        console.error(
          commands[i],
          "is not a valid command (valid commands are 'l', 'r', 'f' and 'b')"
        );
        return;
    }
  }
};

prompt.start();

const promptCommands = () => {
  prompt.get("commands", (err, res) => {
    if (err) {
      console.error(err);
      return;
    }

    pilotRover(res.commands);
    console.log(rover);
    promptCommands();
  });
};

promptCommands();
