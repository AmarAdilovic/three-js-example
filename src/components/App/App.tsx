import { useState } from 'react'
import { StyledDiv } from './styles'
import { SceneCanvas } from '../Scene/SceneCanvas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React + MUI + R3F</h1>
      <StyledDiv className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledDiv>
      <SceneCanvas/>
    </>
  )
}

export default App
