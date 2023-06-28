import { Todo } from '../context/todoContext'

import cx from "classnames"
import useTodoContext from '../hooks/useTodoContext'


type todoItemProps = {
  todo: Todo
}

export default function TodoItem({todo} : todoItemProps) {
  const {dispatch} = useTodoContext()

  const onChange = () => {
      dispatch({type: "UPDATE_TODO", payload: todo.id})
  }

  return (
    <div className='w-full flex flex-row items-center justify-start gap-10 bg-white dark:bg-black text-black dark:text-white px-6 py-3 rounded-md border-2 border-black'>
      <input
        type="checkbox"
        checked={todo.complete}
        className="rounded-full appearance-none border border-gray-300 checked:bg-red-400 checked:border-transparent h-5 w-5 cursor-pointer"
        onChange={onChange}
      />
      <p className={cx(todo.complete && "line-through", 'text-slate-400')}>{todo.todo}</p>
    </div>
  )
}
