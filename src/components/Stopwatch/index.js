// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0}

  handleStartBtn = () => {
    this.timerId = setInterval(this.handleStopWatch, 1000)
  }

  handleStopWatch = () => {
    this.setState(prevState => ({
      minutes:
        prevState.seconds + 1 === 60
          ? prevState.minutes + 1
          : prevState.minutes,
      seconds: prevState.seconds + 1 === 60 ? 0 : prevState.seconds + 1,
    }))
  }

  handleStopBtn = () => {
    clearInterval(this.timerId)
  }

  handleResetBtn = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      isStopWatchStarted: !prevState.isStopWatchStarted,
      minutes: 0,
      seconds: 0,
    }))
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="bg-card">
        <div className="stop-watch-card">
          <h1 className="stop-watch-heading">Stopwatch</h1>
          <div className="stop-timer-card">
            <div className="timer-img-card">
              <img
                className="timer-img"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-img-text">Timer</p>
            </div>
            <h1 className="timer-text">
              {minutes <= 9 ? `0${minutes}` : minutes}:
              {seconds <= 9 ? `0${seconds}` : seconds}
            </h1>
            <div className="buttons-card">
              <button
                className="start-card"
                onClick={this.handleStartBtn}
                type="button"
              >
                Start
              </button>
              <button
                className="stop-card"
                onClick={this.handleStopBtn}
                type="button"
              >
                Stop
              </button>
              <button
                className="reset-card"
                onClick={this.handleResetBtn}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
