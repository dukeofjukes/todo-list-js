import "./main.scss";

// data
import { taskFactory } from "./task";
import { projectFactory } from "./project";

// UI
import { renderNavBar } from "./navBarView";
import { renderSideBar } from "./sideBarView";
import { renderHomePage } from "./projectPageView";

// TODO: get data from localStorage
// TODO: give all projects and tasks a unique ID to be able to access their info from DOM

let project1 = projectFactory("Grocery Shopping", "need to go to the store");
project1.addTask(taskFactory("eggs", ""));
project1.addTask(taskFactory("milk", ""));
let project2 = projectFactory("Library book dropoff", "return a couple books");
let projects = [project1, project2];

document.addEventListener("DOMContentLoaded", () => {
  renderNavBar();
  renderSideBar(projects);
  renderHomePage();
});
