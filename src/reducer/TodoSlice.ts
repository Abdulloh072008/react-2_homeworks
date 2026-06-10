import { createSlice } from '@reduxjs/toolkit'
import img from "../assets/image.png"

export interface Todo {
  id: number
  title: string
  age: string
  img: string
  completed: boolean
}

export interface TodoState {
  data: Todo[]
  allData: Todo[]
}

const initialState: TodoState = {
  data: [
    { id: 1, img: img, age: "20", title: 'Buy groceries', completed: false },
    { id: 2, img: img, age: "24", title: 'Walk the dog', completed: true },
    { id: 3, img: img, age: "22", title: 'Read a book', completed: false },
  ],
  allData: [
    { id: 1, img: img, age: "20", title: 'Buy groceries', completed: false },
    { id: 2, img: img, age: "24", title: 'Walk the dog', completed: true },
    { id: 3, img: img, age: "22", title: 'Read a book', completed: false },
  ],
}



export const todoSlice = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    Deleteuser: (state, action) => {
      state.data = state.data.filter((user) => user.id !== action.payload)
      state.allData = state.allData.filter((user) => user.id !== action.payload)
    },

    AddUser: (state, action) => {
      state.data.push(action.payload)
      state.allData.push(action.payload)
    },

    EditUsers: (state, action) => {
      state.data = state.data.map((user) => user.id == action.payload.id ? action.payload : user)
      state.allData = state.allData.map((user) => user.id == action.payload.id ? action.payload : user)
    },

    SearchUser: (state, action) => {
      if (!action.payload) {
        state.data = state.allData
        return
      }
      state.data = state.allData.filter((user) =>
        user.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())
      )
    }
  },
})

export const { Deleteuser, AddUser, EditUsers, SearchUser } = todoSlice.actions

export default todoSlice.reducer