import { Component } from "react"



export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    }
    countTotalFeedback() {
        return this.state.good + this.state.neutral + this.state.bad
    };
    countPositiveFeedbackPercentage() {
        return Number.parseInt((this.state.good / this.countTotalFeedback() ) * 100)
    };

    handlClickGood = () => {
        this.setState(prevState => ({
                good: prevState.good + 1,
        }))
    };
    handlClickNeutral = () => {
        this.setState(prevState => ({
                neutral: prevState.neutral + 1,
        }))
    };
    handlClickBad = () => {
        this.setState(prevState => ({
                bad: prevState.bad + 1,
        }))
    };

    render() {
            return(
        <div>
            <div >
                <p>Please leave feedback</p>
                <button type="button" onClick={this.handlClickGood}>Good</button>
                <button type="button" onClick={this.handlClickNeutral}>Neutral</button>
                <button type="button" onClick={this.handlClickBad}>Bad</button>
            </div>
            {this.countTotalFeedback() > 0 && (<div>
                <p>Statistics</p>
                <ul>
                    <li>Good: {this.state.good}</li>
                    <li>Neutral: {this.state.neutral}</li>
                    <li>Bad: {this.state.bad}</li>
                    <li>Total: {this.countTotalFeedback()}</li>
                    <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
                </ul>
            </div>)}
            
       </div>
   )
    }

}

