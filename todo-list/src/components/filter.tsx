import {useEffect} from "react"
import { Todo } from '../context/todoContext'
import useTodoContext from '../hooks/useTodoContext'
import cx from "classnames"

type filterProps = {
    todos: Todo[],
    setFiltered: React.Dispatch<React.SetStateAction<Todo[]>>,
    activeFilter: string,
    setActiveFilter: React.Dispatch<React.SetStateAction<string>>
}

export default function Filter({todos, setFiltered, activeFilter, setActiveFilter} : filterProps) {
    const {state, dispatch} = useTodoContext()

    const activeTodos = state.todos?.filter(todo => todo.complete === false)

    const deleteCompleted = () => {
        dispatch({type: "CLEAR_COMPLETE"})
    }

    useEffect(() => {
        if (activeFilter === "All") {
            setFiltered(todos)
            return
        }
        

        let filteredTodos : Todo[] = []
        if(activeFilter === "Active"){
            filteredTodos = state.todos.filter(todo => todo.complete === false)
        } 
        if(activeFilter === "Completed"){
            filteredTodos = state.todos.filter(todo => todo.complete === true)
        }

        setFiltered(filteredTodos)

    }, [activeFilter])

    return (
        <div className='w-full bg-white dark:bg-black border-2 text-black dark:text-white border-black rounded-md flex flex-row items-center justify-between py-2 px-10'>
            <p>{activeTodos.length > 0 ? activeTodos.length : "no todos"} left</p>
            <div className='flex flex-row gap-3'>
                <button className={cx(activeFilter === "All" && "text-red-500")} onClick={() => setActiveFilter("All")}>All</button>
                <button className={cx(activeFilter === "Active" && "text-red-500")} onClick={() => setActiveFilter("Active")}>Active</button>
                <button className={cx(activeFilter === "Completed" && "text-red-500")} onClick={() => setActiveFilter("Completed")}>Completed</button>
            </div>
            <button onClick={deleteCompleted}>Clear Completed</button>
        </div>
    )
}
