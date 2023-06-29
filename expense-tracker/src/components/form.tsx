import {useRef, useState} from 'react'
import useTrackerContext from '../hooks/useTrackerContext'
import { v4 as uuidv4 } from 'uuid';



export default function Form() {
    const {state, dispatch} = useTrackerContext()

    const descriptionRef = useRef<HTMLInputElement | null>(null)
    const amountRef = useRef<HTMLInputElement | null>(null)
    const [selectedType, setSelectedType] = useState<"income" | "expense">()

    const onSubmit = (e: React.FormEvent) => { // e.preventDefault niet vergeten
        e.preventDefault()

        if(!selectedType){
            alert("you must choose a type!")
            return
        }

        const timestamp = new Date().getTime();
        const date = new Date(timestamp);

        const formattedDate = date.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }).replace(/\//g, '-');

        dispatch({type: "ADD_TRANSACTION", payload: {
            id: uuidv4(),
            description: descriptionRef.current!.value,
            date: formattedDate,
            price: parseInt(amountRef.current!.value),
            type: selectedType
        }})


        // Reset form values
        descriptionRef.current!.value = "";
        amountRef.current!.value = "";
        setSelectedType(undefined);
    }

  return (
    <>
        <form onSubmit={onSubmit} className='w-2/5 h-full bg-zinc-300 flex flex-col items-center justify-around border-2 border-zinc-500 rounded-md'>
            <div className='w-3/5 flex flex-col justify-start'>
                <label className='font-bold'>Description:</label>
                <input className='border-2 border-zinc-500 rounded-lg' type="text" name="description" ref={descriptionRef} required/>
            </div>

            <div className='w-3/5 flex flex-col items-start'>
                <label className='font-bold'>Amout:</label>
                <input className='border-2 border-zinc-500 rounded-lg w-full' type="number" name="amount" ref={amountRef} required/>
            </div>

            <div className='w-3/5 flex flex-col items-start'>
                <label className='font-bold'>Type:</label>
                <label>
                    <input
                        type="checkbox"
                        name="Income"
                        checked={selectedType === 'income'}
                        onChange={() => setSelectedType("income")}
                    />
                    Income
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="Expense"
                        checked={selectedType === 'expense'}
                        onChange={() => setSelectedType("expense")}
                    />
                    Expense
                </label>
            </div>


            <button type="submit" className='w-2/5 rounded-xl bg-slate-500 px-4 py-2 text-white hover:bg-slate-800 hover:ease-in-out hover:duration-300'>Submit</button>
        </form>
    </>
  )
}
