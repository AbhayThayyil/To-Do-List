import React from "react";
// Component import
import TaskItem from "./TaskItem";
// Styles
import styles from "./TaskList.module.css";

function TaskList({ tasks, deleteTask, toggleTask, enterEditMode }) {
  return (
    <ul className={styles.tasks}>
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
}

export default TaskList;
