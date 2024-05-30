import { useState } from "react";
import { Todos } from "./components/Todos";
import {
  type TodoTitle,
  type FilterValue,
  type TodoId,
  type Todo as TodoType,
} from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  { id: "1", title: "todo 1", completed: true },
  { id: "2", title: "todo 2", completed: false },
  { id: "3", title: "todo 3", completed: false },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos);
  const [filterSelected, setFilterSelected] = useState<FilterValue>(() => {
    // read from url query params using URLSearchParams
    const params = new URLSearchParams(window.location.search);
    const filter = params.get("filter") as FilterValue | null;
    if (filter === null) return TODO_FILTERS.ALL;
    // check filter is valid, if not return ALL
    return Object.values(TODO_FILTERS).includes(filter)
      ? filter
      : TODO_FILTERS.ALL;
  });

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter);
    const params = new URLSearchParams(window.location.search);
    params.set("filter", filter);
    window.history.pushState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  const handleUpdateTitle = ({ id, title }: Pick<TodoType, "id" | "title">) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;
  return (
    <div className="todoapp">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleted={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
        setTitle={handleUpdateTitle}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
