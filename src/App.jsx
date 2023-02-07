import { useState } from 'react'
import './styles.css'
import TopContainer from './assets/components/TopContainer/TopContainer'
import FormContainer from './assets/components/FormContainer/FormContainer'
import BgContainer from './assets/components/BgContainer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="mainContainer">
          <BgContainer />

      <TopContainer />
      <FormContainer />
    </div>

  )
}

export default App
