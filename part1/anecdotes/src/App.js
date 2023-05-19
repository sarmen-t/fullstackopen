import { useState } from 'react'

function randNum (arr) {
  return (Math.random() * (arr.length-1)).toFixed(0)
}

function checkMost (arr) {
    let hold = 0
    let mostLoc = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > hold) {
          hold = arr[i]
          mostLoc = i
        }
    }
    return mostLoc
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  let votes = new Array(anecdotes.length).fill(0)
  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(votes)
  const [most, setMost] = useState(0)

  return (
    <div>
      <div><h2>Anecdote of the day</h2></div>
      <div>
        <button onClick={() => {
          let num = randNum(anecdotes)
          setSelected(num)
          }}>next anecdote</button>

        <button onClick={() => {
          let copy = [...vote]
          copy[selected] += 1
          setVote(copy)
          setMost(checkMost(copy))
        }}>vote</button>
      </div>
      <br></br>
      {anecdotes[selected]}
      <div> has {vote[selected]} votes </div>

      <div><h2>Anecdote with most votes</h2></div>
      {anecdotes[most]}
      <div> has {vote[most]} votes </div>

    </div>
  )
}

export default App