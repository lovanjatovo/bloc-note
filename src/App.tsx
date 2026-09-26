import { useState } from "react";

type Priority = "Urgente" | "Moyenne" | "Basse"

type Todo = {
  id: number;
  text: string;
  priority: Priority 
}

function App() {
  const [input , setInput] = useState<string>("")
  const [priority , setPriority] = useState("Moyenne")
  const [todos , setTodos] = useState<Todo>([]);

  function addToDo(){
    if(input.trim() == ""){
      return "Vous devez remplir le champ du nouvel note a faire"
    }

    const newToDo: Todo = {
      id: Date.now(),
      text:input.trim(),
      priority: priority
    }

    const newToDos = [newToDo , ...todos]
    setTodos(newToDos)
    setInput("")
    setPriority("Moyenne")
  }

  return (
    <>
    <div className="flex justify-center">
      <div className="w-2/3 flex flex-col gap-4 my-15 bg-base-300 p-5 rounded-2xl">
      <div className="flex gap-4">
      <input type="text" 
      className="input w-full"
      placeholder="Ajouter une tache..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <select 
      name="" 
      id=""
      className="select w-full"
      value={priority}
      onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="Urgente">Urgente</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>
      <button className="btn btn-primary" onClick={addToDo}>
        Ajouter
      </button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
