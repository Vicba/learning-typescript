import {useContext} from 'react'
import { TodoContext } from '../context/todoContext'

export default function useTodoContext() {
    const context = useContext(TodoContext)
    if(!context){
        throw new Error("no context")
    }
    return context
}
