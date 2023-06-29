import useTrackerContext from '../hooks/useTrackerContext'

import TransactionItem from './transactionItem'

export default function TransactionList() {
  const {state, dispatch} = useTrackerContext()

  console.log(state)

  return (
    <div className='w-3/5 h-full p-5'>
      <div className='h-4/5 overflow-y-scroll flex flex-col-reverse justify-end gap-6'>
          {state.transactions ? state.transactions.map((item, idx )=> (
              <TransactionItem key={idx} transaction={item} dispatch={dispatch}/>
          )) : <p>No transactions has been founded...</p>}
      </div>
      <h1 className='text-xl font-bold'>Budget: {state.budget}</h1>
    </div>
    
  )
}
