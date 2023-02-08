import { useState } from 'react'
import './styles.css'
import FormContainer from './assets/components/FormContainer/FormContainer'
import BgContainer from './assets/components/BgContainer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="mainContainer">
          <BgContainer />

      <FormContainer />
    </div>

  )
}

export default App
