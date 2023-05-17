import { useState } from 'react'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div><h2>give feedback</h2></div>
      Buttons go here
      <div><h2>statistics</h2></div>
      here
    </div>
  )
}

export default App