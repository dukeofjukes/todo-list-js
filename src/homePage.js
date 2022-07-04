import { renderProjectPage } from "./projectPage";

const renderHomePage = (projects) => {
  const content = document.querySelector(".content");

  content.innerHTML = `
    <h2>Projects</h2>
  `;

  projects.forEach((project) => {
    content.innerHTML += `
      <div> 
        <button class="project" id="${project.title}-link">${project.title}</button>
      </div>
    `;

    // content.querySelector(`#${project.title}-link`).addEventListener("click", () => {
    //   renderProjectPage(project);
    // });
  });
  
  projects.forEach((project) => {
    document.querySelector("#" + CSS.escape(project.title) + "-link").addEventListener("click", () => {
      renderProjectPage(project);
    })
  });
};

export { renderHomePage };
