// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  OnFeedbackCheck = () => {
    this.setState({isFeedbackGiven: true})
  }

  renderFeedBackQuestion() {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="container">
        <h1 className="heading">
          How Satisfied are you with our <br />
          customer support performance?
        </h1>
        <ul className="emojis-container">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="emoji-heading-container">
              <button type="button" className="emoji-button">
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji"
                  onClick={this.OnFeedbackCheck}
                />
              </button>
              <span className="emoji-heading">{eachEmoji.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen() {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-heading">Thank You</h1>
        <p className="paragraph">
          We will use your feedback to improve our customer support
          <br /> performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="app-container">
        <div className="feedback-container">
          {isFeedbackGiven
            ? this.renderThankYouScreen()
            : this.renderFeedBackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
