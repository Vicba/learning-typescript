import cx from "classnames"
import { Actions } from "../context/transactionContext"

type Transaction = {
  id: string, 
  description: string,
  date: string,
  price: number,
  type: "income" | "expense"
}

type TransactionItemProps = {
  transaction: Transaction,
  dispatch: React.Dispatch<Actions>
}

export default function TransactionItem({transaction, dispatch} : TransactionItemProps) {

  const onDelete = (id : string) => {
    dispatch({type: "REMOVE_TRANSACTION", payload: id})
  }

  return (
    <div className={cx(transaction.type == "income" ? "border-r-8 border-lime-600" : "border-r-8 border-orange-700" ,"border-2 flex flex-row justify-around py-3")}>
      <p>{transaction.description}</p>
      <p>{transaction.date}</p>
      <p>{transaction.price}</p>
      <button onClick={() => onDelete(transaction.id)}>❌</button>
    </div>
  )
}
