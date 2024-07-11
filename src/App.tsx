import { useState } from "react"
import FormCard from "./componentes/FormCard"

function App() {

  const [state, setState] = useState(1)
  console.log(state)
 
  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center">
      {state === 1 ? <FormCard label={'Email address'} text="Step 1" type={"email"} placeholder="Enter email" setState={setState} state={state}/> : ""}
      {state === 2 ? <FormCard label={'Username'} text="Step 2" type={"text"} placeholder="Enter username" setState={setState} state={state}/> : ""}
      {state === 3 ? <FormCard label={'Password'} text="Step 3" type={"password"} placeholder="Enter password" setState={setState} state={state}/> : ""}
    </div>
  )
}

export default App
