import { renderProjectPage } from "./projectPage";

const renderHomePage = (projects) => {
  const sidebar = document.querySelector(".sidebar");

  sidebar.innerHTML = "";

  projects.forEach((project) => {
    sidebar.innerHTML += `
      <div> 
        <button class="project" id="${project.title}-link">${project.title}</button>
      </div>
    `;
  });

  projects.forEach((project) => {
    document
      .querySelector("#" + CSS.escape(project.title) + "-link")
      .addEventListener("click", () => {
        renderProjectPage(project);
      });
  });
};

export { renderHomePage };
