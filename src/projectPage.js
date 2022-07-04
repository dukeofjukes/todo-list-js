const renderProjectPage = (project) => {
  const content = document.querySelector(".content");

  content.innerHTML = `
    <h2>${project.title}</h2>
  `;
}

export { renderProjectPage }