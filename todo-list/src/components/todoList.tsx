import {ReactNode} from "react"
import useTodoContext from '../hooks/useTodoContext'

import TodoItem from './todoItem'
import { Todo } from "../context/todoContext"

type ListProps = {
    filtered: Todo[]
}

export default function TodoList({filtered}: ListProps) : ReactNode {

    return (
        <div className="w-full flex flex-col-reverse gap-2">
            {filtered ? filtered.map((todo, idx) => (
                <TodoItem key={idx} todo={todo}/>
            )) : <p>No todos found</p>}
        </div>
    )
}
