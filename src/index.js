import "./main.scss";

// data
import { taskFactory } from "./task";
import { projectFactory } from "./project";

// UI
import { renderNavBar } from "./navBarView";
import { renderSideBar } from "./sideBarView";
import { renderHomePage } from "./projectPageView";

// TODO: get data from localStorage

let project1 = projectFactory("Grocery Shopping", "need to go to the store");
let project2 = projectFactory("Library book dropoff", "return a couple books");
let projects = [project1, project2];

document.addEventListener("DOMContentLoaded", () => {
  renderNavBar();
  renderSideBar(projects);
  renderHomePage();
});
