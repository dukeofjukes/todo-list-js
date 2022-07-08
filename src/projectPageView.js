const renderProjectPage = (project) => {
  const tasksView = document.querySelector(".tasks");

  tasksView.innerHTML = `
    <h2>${project.title}</h2>
    <div>${project.description}</div>
  `;

  project.tasks.forEach((task) => {
    // TODO: add table rows? show each task along with an edit button, remove button, and checkbox
    // tasksView.innerHTML = `
    // `;
  });
};

const renderHomePage = () => {
  const tasksView = document.querySelector(".tasks");

  tasksView.innerHTML = `
    <h2>Welcome to Todo App!</h2>
    
  `;
};

export { renderProjectPage, renderHomePage };
