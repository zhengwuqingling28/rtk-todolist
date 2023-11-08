import { Filters } from "./Components/Filters";
import { TodoList } from "./Components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;
