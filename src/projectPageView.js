const renderProjectPage = (project) => {
  const mainView = document.querySelector(".main");

  mainView.innerHTML = `
    <h2>${project.title}</h2>
    <div>${project.description}</div>
  `;

  project.tasks.forEach((task) => {
    mainView.innerHTML += `
      <div class="task">
        <div class="left">
          <div class="checkbox">
          ${
            task.complete
              ? `<i class="fa-solid fa-square-check"></i>`
              : `<i class="fa-solid fa-square"></i>`
          }
          </div>
          <div class="task-title">${task.title}</div>
        </div>
        <div class="right"></div>
      </div>
    `;
  });

  mainView.querySelectorAll(".checkbox").forEach((checkbox) => {
    checkbox.addEventListener("click", () => {});
  });
};

const renderHomePage = () => {
  const mainView = document.querySelector(".main");

  mainView.innerHTML = `
    <h2>Welcome to Todo App!</h2>
    <p>Create a project on the left to get started!</p>
    <p>Or, jump into an existing project.</p>
  `;
};

export { renderProjectPage, renderHomePage };
