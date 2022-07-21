const taskFactory = (
  title = "",
  description = ""
  // dueDate,
  // priority,
) => {
  let complete = false;

  const toggleComplete = () => {
    complete = !complete;
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

    set complete(newComplete) {
      complete = newComplete;
    },
    get complete() {
      return complete;
    },
    toggleComplete,
  };
};

export { taskFactory };
