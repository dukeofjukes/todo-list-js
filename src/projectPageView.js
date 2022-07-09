const renderProjectPage = (project) => {
  const tasksView = document.querySelector(".tasks");

  tasksView.innerHTML = `
    <h2>${project.title}</h2>
    <div>${project.description}</div>
  `;

  // TODO: add a checkbox from font awesome
  project.tasks.forEach((task) => {
    tasksView.innerHTML += `
      <div class="task">
        <div class="left">
          <div class="checkbox"></div>
          ${task.title}
        </div>
        <div class="right"></div>
      </div>
    `;
  });
};

const renderHomePage = () => {
  const tasksView = document.querySelector(".tasks");

  tasksView.innerHTML = `
    <h2>Welcome to Todo App!</h2>
    <p>Create a project on the left to get started!</p>
    <p>Or, jump into an existing project.</p>
  `;
};

export { renderProjectPage, renderHomePage };
