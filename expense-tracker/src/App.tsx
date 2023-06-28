import Layout from "./components/layout"
import Form from "./components/form"
import TransactionList from "./components/transactionList"

function App() {

  return (
    <>
      <Layout>
        <Form/>
        <TransactionList/>
      </Layout>
    </>
  )
}

export default App
