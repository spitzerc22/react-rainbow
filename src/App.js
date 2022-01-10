import React, {useState} from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  let [colors, setColors] = useState(['purple', 'green', 'black']) 
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock color={color} />
    )
  })
  return (
    <div className="App">
        {colors.map((color, i) => 
          <ColorBlock key={i} color={color} />
        )}
        <ColorForm />
    </div>
  )
}

export default App