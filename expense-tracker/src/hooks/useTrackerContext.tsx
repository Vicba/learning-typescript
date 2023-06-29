import { useContext } from 'react'
import { TrackerContext } from '../context/transactionContext'

export default function useTrackerContext() {
    const context = useContext(TrackerContext)

    if(!context){
        throw new Error("no context")
    }

    return context
}
