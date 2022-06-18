const todoFactory = (
  title = "",
  description = ""
  // dueDate,
  // priority,
  // checkList
) => {
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
  };
};

export { todoFactory };
