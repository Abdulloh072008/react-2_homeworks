import { useSelector } from "react-redux"
import { Cards } from "./components/shared/Cards"
import { useAppDispatch, type RootState } from "./store/store"
import { AddDialog } from "./components/shared/AddDialfg"
import { SearchUser } from "./reducer/TodoSlice"

const App = () => {
  const todos = useSelector((state: RootState) => state.Todo.data)
  const diaptch = useAppDispatch()
  return (
    <>

      <div className="grid-cols-2 gap-5">
        <input onChange={(e) => diaptch(SearchUser(e.target.value))} type="search" className="border border-gray-200 p-2 rounded-sm" placeholder="Search Title" />
        <AddDialog />
      </div>
      <div className="flex items-center justify-evenly mt-10 flex-wrap gap-5">

        {todos.map((todo) => (
          <div className="" key={todo.id}>
            <Cards user={todo} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App