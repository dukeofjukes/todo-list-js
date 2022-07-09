const projectFactory = (title = "", description = "") => {
  let tasks = [];
  const addTask = (newTask) => {
    tasks.push(newTask);
  };
  const removeTask = (index) => {
    tasks.splice(index, 1);
  };

  return {
    set title(newTitle) {
      title = newTitle;
    },
    get title() {
      return title;
    },

    set description(newDescription) {
      description = newDescription;
    },
    get description() {
      return description;
    },

    get tasks() {
      return tasks;
    },

    addTask,
    removeTask,
  };
};

export { projectFactory };
