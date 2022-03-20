class Robot {
  constructor() {
    this.xCoor = 0;
    this.yCoor = 0;
    this.face = "";
    this.command = "";
  }

  execute(str) {
    let splitted = str.split(" ");
    this.xCoor = parseInt(splitted[0]);
    this.yCoor = parseInt(splitted[1]);
    this.face = splitted[2];
    this.command = splitted[3];
    let commandArr = [...this.command];
    for (let command of commandArr) {
      if (command === "R") {
        if (this.face === "NORTH") {
          this.face = "EAST";
        } else if (this.face === "EAST") {
          this.face = "SOUTH";
        } else if (this.face === "SOUTH") {
          this.face = "WEST";
        } else if (this.face === "WEST") {
          this.face = "NORTH";
        }
      }
      if (command === "L") {
        if (this.face === "NORTH") {
          this.face = "WEST";
        } else if (this.face === "EAST") {
          this.face = "NORTH";
        } else if (this.face === "SOUTH") {
          this.face = "EAST";
        } else if (this.face === "WEST") {
          this.face = "SOUTH";
        }
      }
      if (command === "A") {
        if (this.face === "NORTH") this.yCoor++;
        if (this.face === "EAST") this.xCoor++;
        if (this.face === "SOUTH") this.yCoor--;
        if (this.face === "WEST") this.xCoor--;
      }
    }
    return `${this.xCoor} ${this.yCoor} ${this.face}`;
  }
}

module.exports = Robot;
