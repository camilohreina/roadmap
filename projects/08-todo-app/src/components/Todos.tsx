import { useState } from "react";
import { type Todo as TodoType, type TodoId, type ListOfTodos } from "../types";
import { Todo } from "./Todo";

interface Props {
  todos: ListOfTodos;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
  setTitle: (params: Omit<TodoType, "completed">) => void;
}

export const Todos: React.FC<Props> = ({
  todos,
  onRemoveTodo,
  onToggleCompleted,
  setTitle,
}) => {
  const [isEditing, setIsEditing] = useState("");

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          onDoubleClick={() => {
            setIsEditing(todo.id);
          }}
          className={`
          ${todo.completed ? "completed" : ""}
          ${isEditing === todo.id ? "editing" : ""}
        `}
        >
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            setTitle={setTitle}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            onToggleCompletedTodo={onToggleCompleted}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  );
};
