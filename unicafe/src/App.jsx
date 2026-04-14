import { useState } from 'react'

const Header = () => <h1>give feedback</h1>

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const StatisticsLine = ({ value, text }) => (
  <tr>
    <td>{text} </td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({
  good,
  neutral,
  bad,
  allReviews,
  averageReviews,
  positiveReviews,
}) => {
  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text={'good'} value={good} />
          <StatisticsLine text={'neutral'} value={neutral} />
          <StatisticsLine text={'bad'} value={bad} />
          <StatisticsLine text={'all'} value={allReviews} />
          <StatisticsLine text={'average'} value={averageReviews} />
          <StatisticsLine text={'positive'} value={`${positiveReviews} %`} />
        </tbody>
      </table>
    </div>
  )
}
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const allReviews = good + neutral + bad
  const hasReviews = allReviews > 0
  const averageReviews = hasReviews ? (good - bad) / allReviews : 0
  const positiveReviews = hasReviews ? (good / allReviews) * 100 : 0

  return (
    <div>
      <Header />
      <table>
        <tbody>
          <tr>
            <td>
              <Button onClick={increaseGood} text={'good'} />
            </td>
            <td>
              <Button onClick={increaseNeutral} text={'neutral'} />
            </td>
            <td>
              <Button onClick={increaseBad} text={'bad'} />
            </td>
          </tr>
        </tbody>
      </table>
      {hasReviews ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          allReviews={allReviews}
          averageReviews={averageReviews}
          positiveReviews={positiveReviews}
        />
      ) : (
        <p>No feedback given </p>
      )}
    </div>
  )
}

export default App
