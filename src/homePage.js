const renderHomePage = (projects) => {
  const content = document.querySelector(".content");

  content.innerHTML = `
    <h2>Projects</h2>
  `;

  projects.forEach(project => {
    content.innerHTML += `
      <div class="project-line">
        <div class="title">${project.title}</div>
      </div>
    `;
  });
}

export { renderHomePage };
