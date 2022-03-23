import { Robot } from "./robot-simulator.js";

const robot = new Robot();
const form = document.querySelector("#command");
const executeForm = document.querySelector("#executeForm");
const input = form.querySelector("input");
const zero = document.querySelector("#zero");

const output = form.querySelector("output");

function handleSubmit(event) {
  event.preventDefault();
  let command = input.value;
  output.querySelector("#user-command").textContent = command + " ➡ ";
  output.querySelector("#user-result").textContent = robot.execute(command);
  let [xCoor, yCoor, bearing, execute] = command.split(" ");
  handleZero(parseInt(xCoor), parseInt(yCoor), bearing);
  handleExecute(execute);
  form.classList.add("hidden");
  executeForm.classList.remove("hidden");
}

function handleExecute(execute) {
  console.log(execute);
}

function handleZero(xCoor, yCoor, bearing) {
  let gridX = parseInt(getComputedStyle(zero).left) / 20;
  let gridY = parseInt(getComputedStyle(zero).bottom) / 20;
  let border;
  gridX = gridX + xCoor;
  gridY = gridY + yCoor;
  if (bearing === "NORTH") {
    border = "border-top";
    zero.setAttribute(
      "style",
      `left: ${gridX}rem;bottom: ${gridY}rem;${border}: 5px solid #15dae3;`
    );
  } else if (bearing === "EAST") {
    border = "border-right";
    zero.setAttribute(
      "style",
      `left: ${gridX}rem;bottom: ${gridY}rem;${border}: 5px solid #15dae3;`
    );
  } else if (bearing === "SOUTH") {
    border = "border-bottom";
    zero.setAttribute(
      "style",
      `left: ${gridX}rem;bottom: ${gridY}rem;${border}: 5px solid #15dae3;`
    );
  } else if (bearing === "WEST") {
    border = "border-left";
    zero.setAttribute(
      "style",
      `left: ${gridX}rem;bottom: ${gridY}rem;${border}: 5px solid #15dae3;`
    );
  }
}

form.addEventListener("submit", handleSubmit);
