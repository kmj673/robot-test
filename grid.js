const Robot = require("./robot-simulator");

const robot = new Robot();
const form = document.querySelector("#command");
const input = form.querySelector("input");

const output = form.querySelector("output");

function handleSubmit(event) {
  event.preventDefault();
  let command = input.value;
  output.querySelector("#user-command").textContent = command + " ➡ ";
  output.querySelector("#user-result").textContent = robot.execute(command);
  console.log(robot);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
