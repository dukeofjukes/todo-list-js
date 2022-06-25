import "./main.scss";
import { taskFactory } from "./task.js";
import { projectFactory } from "./project.js";
import { renderHomePage } from "./homePage.js";

// TODO: get data from localStorage

let project1 = projectFactory("Grocery Shopping", "need to go to the store");
let project2 = projectFactory("Library book dropoff", "return a couple books");
let projects = [project1, project2];

document.addEventListener("DOMContentLoaded", () => {
  renderHomePage(projects);
})
