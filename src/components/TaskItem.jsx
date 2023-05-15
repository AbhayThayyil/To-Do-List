import React, { useState } from "react";
// Component import

// Styles
import styles from "./TaskItem.module.css";

// Library imports
import { CheckIcon } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/outline";

function TaskItem({ task, deleteTask, toggleTask, enterEditMode }) {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id)
  };

  return (
    <li className={styles.task}>
      <div className={styles["task-group"]}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={isChecked}
          name={task.taskName}
          id={task.id}
          onChange={handleCheckboxChange}
        />
        <label htmlFor={task.id} className={styles.label}>
          {task.taskName}
          <p className={styles.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={styles["task-group"]}>
        <button
          className="btn"
          aria-label={`Update ${task.taskName} Task`}
          onClick={()=>enterEditMode(task)}
        >
          <PencilIcon width={24} height={24} />
        </button>

        <button
          className={`btn ${styles.delete}`}
          aria-label={`Delete ${task.taskName} Task`}
          onClick={()=>deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
