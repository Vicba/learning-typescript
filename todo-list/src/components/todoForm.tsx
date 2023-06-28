import React, { useRef } from 'react'

import { v4 as uuidv4 } from 'uuid';

import useTodoContext from '../hooks/useTodoContext';


export default function TodoForm() {
    const {dispatch} = useTodoContext()

    const todoRef = useRef<HTMLInputElement | null>(null)

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch({type: "ADD_TODO", payload: {
            id: uuidv4(),
            todo: todoRef.current!.value,
            complete: false
        }})

        todoRef.current!.value = ""
    }

  return (
    <form onSubmit={onSubmit} className='w-full'>
      <input ref={todoRef} className='w-full bg-white dark:bg-black text-black dark:text-white px-6 py-3 rounded-md border-2 border-black' type="text" placeholder='Create a new Todo...' />
    </form>
  )
}
