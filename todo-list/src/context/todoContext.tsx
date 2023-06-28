import { ReactNode, createContext, useReducer } from "react"

export type Todo = {
    id: string,
    todo: string,
    complete: boolean
}

type StateType = {
    todos: Todo[]
}

const initialValue : StateType = {todos: []}



export type Action = 
        | {type: "ADD_TODO", payload: Todo}
        | {type: "REMOVE_TODO", payload: string}
        | {type: "UPDATE_TODO", payload: string}
        | {type: "CLEAR_COMPLETE", payload?: any}


const reducer = (state: StateType, action: Action) : StateType => {
    switch(action.type){
        case "ADD_TODO":
            if(!action.payload){
                throw new Error("no payload")
            }
            return {todos: [...state.todos, action.payload]}

        case "REMOVE_TODO":
            if(!action.payload){
                throw new Error("no payload")
            }

            const filteredTodos : Todo[] = state.todos.filter(todo => todo.id != action.payload)

            return {todos: [...filteredTodos]}

        case "UPDATE_TODO":
            if(!action.payload){
                throw new Error("no payload")
            }

            const filteredTodo: Todo[] = state.todos.filter(todo => todo.id !== action.payload);
            const getTodo: Todo | undefined = state.todos.find(todo => todo.id === action.payload);

            if (!getTodo) {
                throw new Error("no todo found");
            }

            const updatedTodo: Todo = {
                ...getTodo,
                complete: !getTodo.complete
            };


            return {todos: [...filteredTodo, updatedTodo]}

        case "CLEAR_COMPLETE":
            const uncompletedTodos : Todo[] = state.todos.filter(todo => todo.complete === false)

            return {todos: [...uncompletedTodos]}

        default:
            return state
    }
}


type TodoContextProps = {
    state: StateType,
    dispatch: React.Dispatch<Action>
}


export const TodoContext = createContext<TodoContextProps | null>(null)


type providerProps = {
    children: ReactNode
}

export const TodoProvider = ({children} : providerProps) : ReactNode => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    const value : TodoContextProps = {
        state,
        dispatch
    }
    
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}


