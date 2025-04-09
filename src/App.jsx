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
  const [oldWaters, setOldWaters] = useState('')


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

  const modifyWater = (oldTitle) => {
    if (newWaters === '') {
      return
    }
    const updatedWaters = waters.map(water => {
      if (water.title === oldTitle) {
        return { ...water, title: newWaters }
      }
      return water
    })
    setWaters(updatedWaters)
    setOldWaters('')
    setNewWaters('')
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
      <form className="modify-water-form" onSubmit={(event) => {
        event.preventDefault()
        modifyWater(oldWaters)
      }}>
        <p>nome acqua da modificare</p>
        <input
          type="text"
          value={oldWaters}
          onChange={(event) => setOldWaters(event.target.value)} />
        <br />
        <p>nuovo nome dell'acqua</p>
        <input
          type="text"
          value={newWaters}
          onChange={(event) => setNewWaters(event.target.value)} />
        <br />
        <button>modifica acqua</button>
      </form>
    </>
  )
}

export default App