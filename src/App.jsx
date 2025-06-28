import './App.css'
import Todo from "./components/Todo.jsx" // import Todo from "components/Todo.jsx" used only to import dependencies
import Headerlist from "./components/Component.jsx"
import Popupfunc from "./components/Popup.jsx"
import { useState  } from 'react'

function App() {
  const [popupOpen, setPopupOpen] = useState(false)
  // array destructuring to directly grab the two values within that array out of it
  // array destructuring to grab two values
  // let popupOpen = false
  // link it to actual,
  //

//
  return (
    <>
      <Headerlist />
      <div>
        <input type="text" onChange={(event) => {
         console.log(event.target.value)
        }}></input>
        <button onClick={() => setPopupOpen(true)}>Add to do</button>
        {/* with the to do button we are running the togglepopup button */}
      </div>
     <Todo 
     task="Learn React" 
     />
     <Todo 
     task="2"
     />
     <Todo 
     task="3"
     />
     <Todo task="4"
     /> 
     {popupOpen && <Popupfunc title="Hey, are you 1r000% sure"/>} 
     {/* what we have to do to conditionally render a component in react is wrap it in curly braces
     you can write javascript in the curly brackets
     */}
    </>
  )
}

export default App
