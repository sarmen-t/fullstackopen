import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Average = (props) => {
  let sum = props.nums[0] + props.nums[1] + props.nums[2]
  let val = props.nums[0] - props.nums[2]
  let average = (val/sum).toFixed(2)
  if (sum === 0){
    return (<tr><td>average</td><td>0</td></tr>)
  }
  return (<tr><td>{props.label}</td><td>{average}</td></tr>)
}

const Positive = (props) => {
  let sum = props.nums[0] + props.nums[1] + props.nums[2]
  let positive = ((props.nums[0]/sum) * 100).toFixed(2)
  if (sum === 0){
    return (<tr><td>positive</td><td>0%</td></tr>)
  }
  return (<tr><td>{props.label}</td><td>{positive}%</td></tr>)
}

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.label}</td>
      <td>{props.value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => {
        setGood(good + 1)
        setTotal(total + 1)}} text="good"/>

      <Button handleClick={() => {
        setNeutral(neutral + 1)
        setTotal(total + 1)}} text="neutral"/>

      <Button handleClick={() => {
        setBad(bad + 1)
        setTotal(total + 1)}} text="bad"/>
        
      <h2>statistics</h2>

      <table>
        <tbody>
          <StatisticLine label="good" value={good} />
          <StatisticLine label="neutral" value={neutral} />
          <StatisticLine label="bad" value={bad} />
          <StatisticLine label="total" value={total} />
          <Average label="average" nums={[good, neutral, bad]} />
          <Positive label="positive" nums={[good, neutral, bad]} />
        </tbody>
      </table>

    </div>
  )
}

export default App