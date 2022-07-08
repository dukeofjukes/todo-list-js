import { renderProjectPage } from "./projectPageView";

const renderSideBar = (projects) => {
  const sidebar = document.querySelector(".sidebar");

  sidebar.innerHTML = `
    <button id="new-project-btn"><i class="fa-solid fa-plus"></i></button>
  `;

  projects.forEach((project) => {
    sidebar.innerHTML += `
      <div> 
        <button class="project" id="${project.title}-link">${project.title}</button>
      </div>
    `;
  });

  document.querySelector("#new-project-btn").addEventListener("click", () => {
    renderNewProjectModal();
  });

  projects.forEach((project) => {
    document
      .querySelector("#" + CSS.escape(project.title) + "-link")
      .addEventListener("click", () => {
        renderProjectPage(project);
      });
  });
};

export { renderSideBar };
