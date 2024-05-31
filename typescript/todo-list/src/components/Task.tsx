import React from 'react';

type Props = {
  task: string;
  deleteTask: () => void;
};

export const Task = ({ deleteTask, task }: Props) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};
