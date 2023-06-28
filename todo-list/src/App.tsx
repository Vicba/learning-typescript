import Header from "./components/header";
import Layout from "./components/layout"
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import Filter from "./components/filter";
import { useEffect, useState } from "react";
import { Todo } from "./context/todoContext";
import useTodoContext from "./hooks/useTodoContext";


function App() {
  const {state} = useTodoContext()

  const [todos, setTodos] = useState<Todo[]>([])
  const [filtered, setFiltered] = useState<Todo[]>([])
  const [activeFilter, setActiveFilter] = useState<string>("All")

  useEffect(() => {

    setTodos(state.todos)
    setFiltered(state.todos)

  }, [state]);

  return (
    <>
      <Layout>
        <div className="h-[50rem] w-[80%] mb-25 flex flex-col items-center justify-start gap-3">
          <Header/>
          <TodoForm/>
          <TodoList filtered={filtered}/>
          <Filter todos={todos} setFiltered={setFiltered} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
        </div>
      </Layout>
    </>
  );
}

export default App
