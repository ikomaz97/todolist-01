import './App.css'
import {TodoList} from "./TodoList.tsx";

export const  App = () => {
  return (
      <div className="app">

         <TodoList title ="What to lern"/>
         <TodoList title ="Song"/>
         <TodoList title ="Books"/>

      </div>
  )
}

export default App
