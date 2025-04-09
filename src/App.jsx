import { useState } from 'react'


const watersArray = [
  { id: 1, title: 'Ferrarelle' },
  { id: 2, title: 'San Benedetto' },
  { id: 3, title: 'Lete' },
  { id: 4, title: 'Sant’Anna' },
  { id: 5, title: 'Acqua Panna' },
  { id: 6, title: 'Levissima' },
  { id: 7, title: 'Rocchetta' },
  { id: 8, title: 'Uliveto' },
  { id: 9, title: 'Vitasnella' },
  { id: 10, title: 'Recoaro' }
]

function App() {

  // const [firstName, setFirstName] = useState('Piero')
  // const [lastName, setLastName] = useState('Pacilio')


  // const handleSubmit = event => {
  //   event.preventDefault()
  //   console.log(firstName + ' ' + lastName)
  // }




  // const [tasks, setTasks] = useState(['Mangiare la pizza'])
  // const [newTasks, setNewTasks] = useState('')

  // const addTask = event => {
  //   event.preventDefault()
  //   const updatedTasks = [...tasks, newTasks]
  //   setTasks(updatedTasks)
  //   setNewTasks('')
  // }

  // const deleteTask = i => {
  //   const updatedTasks = tasks.filter((task, index) => {
  //     return index !== i
  //   })
  //   setTasks(updatedTasks)
  // }


  const [waters, setWaters] = useState(watersArray)
  const [newWaters, setNewWaters] = useState('Acqua di Gaetano')


  const addWater = event => {
    event.preventDefault()
    const newWaterObject = {
      id: waters.length + 1,
      title: newWaters
    }
    const updatedWaters = [...waters, newWaterObject]
    setWaters(updatedWaters)
    setNewWaters('')
  }


  return (
    <>
      {/* <h2>Demo Form</h2>
      <p>Inserisci Nome e Cognome</p>
      <form action="#" onSubmit={handleSubmit}>

        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)} />

        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)} />

        <button>Invia il Form</button>

      </form>
      <hr />
      <div>Il nome è {firstName} {lastName}</div>
      <hr />

      <h2>Demo ToDoList</h2>
      <ul>
        {tasks.map((task, i) =>
          <li key={i}>
            <h4>{task}  <button onClick={() => deleteTask(i)}>X</button></h4>

          </li>
        )}
      </ul>
      <form onSubmit={addTask}>

        <input
          type="text"
          value={newTasks}
          onChange={(event) => setNewTasks(event.target.value)} />

        <button>aggiungi nuova task</button>

      </form> */}
      <ul>
        {waters.map((water, i) =>
          <li key={i}>
            {water.title}
          </li>)}
      </ul>
      <form onSubmit={addWater}>
        <input
          type="text"
          value={newWaters}
          onChange={(event) => setNewWaters(event.target.value)} />

        <button>aggiungi acqua</button>
      </form>
    </>
  )
}

export default App