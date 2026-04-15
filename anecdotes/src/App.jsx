import { useState } from 'react'

const Title = ({ text }) => <h1>{text}</h1>
const Button = ({ text, onCLick }) => (
  <>
    <button onClick={onCLick}> {text}</button>
  </>
)
const TopAnecdote = ({ anecdotes, votes }) => {
  return (
    <p>
      {anecdotes} has {votes} votes
    </p>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  })
  const handleNextAnecdote = () => {
    const getRandomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(getRandomIndex)
  }
  const handleVotes = () => {
    setVotes((votes) => ({
      ...votes,
      [selected]: votes[selected] + 1,
    }))
  }
  const voteValues = Object.values(votes)
  const max = Math.max(...voteValues)
  const index = voteValues.indexOf(max)

  return (
    <div>
      <Title text={'Anecdote of the day'} />
      <div>{anecdotes[selected]}</div>
      <p>has {votes[selected]} votes</p>
      <p>
        <Button onCLick={handleNextAnecdote} text={'next anecdote'} />
        <Button onCLick={handleVotes} text={'vote'} />
        <Title text={'Anecdote with the votes'} />
      </p>
      <TopAnecdote anecdotes={anecdotes[index]} votes={votes[index]} />
    </div>
  )
}

export default App
