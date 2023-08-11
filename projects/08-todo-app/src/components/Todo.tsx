import { type TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onToggleCompletedTodo: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
  onRemoveTodo: ({ id }: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompletedTodo,
}) => {
  //typed functions with events
  const handleChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompletedTodo({ id, completed: event.target.checked });
  };

  return (
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
  );
};
