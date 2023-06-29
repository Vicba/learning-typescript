import { ReactNode, createContext, useReducer } from "react"

type Transaction = {
    id: string, 
    description: string,
    date: string,
    price: number,
    type: "income" | "expense"
}

type StateType = {
    budget: number,
    transactions: Transaction[]
}

const initialState : StateType = {budget: 500, transactions: [
    {id: "sqdfqsdf", description: "test1", date: "24/07/08" , price: 8, type: "expense"},
    {id: "qsf", description: "hello", date: "24/07/08",  price: 15, type: "income"},
    {id: "wxv", description: "john", date: "24/07/08",  price: 25, type: "expense"},
    {id: "pok", description: "alexa", date: "24/07/08" , price: 30, type: "income"},
]}

export type Actions = 
    | {type: "ADD_TRANSACTION", payload: Transaction}
    | {type: "REMOVE_TRANSACTION", payload: string};



const reducer = (state : StateType, action: Actions): StateType => {
    switch(action.type){
        case "ADD_TRANSACTION":
            if(!action.payload){
                throw new Error("no payload")
            }

            const newBudget = action.payload.type == "income" 
                ? state.budget + action.payload.price
                : state.budget - action.payload.price

            const newTransactions = [...state.transactions, action.payload]

            return {budget:  newBudget, transactions: newTransactions}

        case "REMOVE_TRANSACTION":
            const transaction = state.transactions.find((tran) => tran.id === action.payload);

            let updatedBudget = transaction?.type === "expense" // je mag niet zomaar de state veranderen. anders rendert het 2 keer
                ? state.budget - transaction.price
                : state.budget;

            if(updatedBudget <= 0) updatedBudget = 0

            const filteredTransactions = state.transactions.filter((tran) => tran.id !== action.payload);

            return { ...state, budget: updatedBudget, transactions: filteredTransactions };
        default:
            return state
    }

}



type TrackerContextProps = {
    state: StateType,
    dispatch: React.Dispatch<Actions>
}

// export const TrackerContext = createContext<StateType>(initialState)
export const TrackerContext = createContext<TrackerContextProps | null>(null);




type ChildrenProps = {
    children: ReactNode
}

export const TransactionProvider = ({children}: ChildrenProps) : ReactNode => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value : TrackerContextProps = {
        state,
        dispatch
    }
    
    return (
        <TrackerContext.Provider value={value}>
            {children}
        </TrackerContext.Provider>
    )
}