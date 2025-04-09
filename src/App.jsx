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

  const [waters, setWaters] = useState(watersArray)
  const [newWaters, setNewWaters] = useState('Acqua di Gaetano')


  const addWater = event => {
    if (newWaters === '') {
      return
    }
    event.preventDefault()
    const newWaterObject = {
      id: waters.length + 1,
      title: newWaters
    }
    const updatedWaters = [...waters, newWaterObject]
    setWaters(updatedWaters)
    setNewWaters('')
  }

  const deleteWater = idToDelete => {
    const updatedWaters = waters.filter(water => water.id !== idToDelete)
    setWaters(updatedWaters)
  }


  return (
    <>
      <h1>React Waters Blog Form</h1>
      <ul>
        {waters.map(water =>
          <li key={water.id}>
            {water.title}
            <span onClick={() => deleteWater(water.id)}>X</span>
          </li>)}
      </ul>
      <form onSubmit={addWater}>
        <input
          type="text"
          value={newWaters}
          onChange={(event) => setNewWaters(event.target.value)} />
        <br />
        <button>aggiungi acqua</button>
      </form>
    </>
  )
}

export default App