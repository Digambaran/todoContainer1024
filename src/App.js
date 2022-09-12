import React, { lazy } from 'react'
import { Suspense } from 'react'
import env from 'env'
import Header from './components/Header'
const TodoInput1024 = lazy(() => import('./components/TodoInput1024'))
const TodoItem1024 = lazy(() => import('./components/TodoItem1024'))

function App() {
  const [todos, setTodos] = React.useState([])
  const [refetch, setRefetch] = React.useState(false)

  React.useEffect(() => {
    fetch(`${env.BLOCK_FUNCTION_URL}/listTodos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data ? data.map(({ id, item }) => ({ id, item: item.name })) : [])
        setRefetch(false)
      })
      .catch((err) => console.log(err))
  }, [refetch])
  return (
    <Suspense fallback={<p>loading..</p>}>
      <Header />
      <div className="w-1/2 mx-auto p-8 mt-8 border-dashed border-2 border-sky-500">
        <h1>Container</h1>
        <TodoInput1024 refetch={setRefetch} />
        {todos.map((item) => (
          <TodoItem1024 refetch={setRefetch} item={item.item} id={item.id} key={item.id} />
        ))}
      </div>
    </Suspense>
  )
}

export default App
