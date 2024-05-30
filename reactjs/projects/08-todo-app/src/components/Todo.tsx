import { useEffect, useRef, useState } from "react";
import { type TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onToggleCompletedTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
  setTitle: (params: Omit<TodoType, "completed">) => void;
  isEditing: string;
  setIsEditing: (completed: string) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompletedTodo,
  setTitle,
  isEditing,
  setIsEditing,
}) => {
  //typed functions with events
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompletedTodo({ id, completed: event.target.checked });
  };

  const [editedTitle, setEditedTitle] = useState(title);
  const inputEditTitle = useRef<HTMLInputElement>(null);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setEditedTitle(editedTitle.trim());

      if (editedTitle !== title) {
        setTitle({ id, title: editedTitle });
      }

      setIsEditing("");
    }

    if (e.key === "Escape") {
      setEditedTitle(title);
      setIsEditing("");
    }
  };

  useEffect(() => {
    inputEditTitle.current?.focus();
  }, [isEditing]);

  return (
    <>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={handleChangeCheckBox}
        />
        <label htmlFor="">{title}</label>
        <button
          className="destroy"
          onClick={() => {
            onRemoveTodo({ id });
          }}
        ></button>
      </div>
      <input
        className="edit"
        value={editedTitle}
        onChange={(e) => {
          setEditedTitle(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setIsEditing("");
        }}
        ref={inputEditTitle}
      />
    </>
  );
};
