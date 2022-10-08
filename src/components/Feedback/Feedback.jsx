import { Component } from "react";
import {
    FeedbackBlock,
    Title,
    BtnBlock,
    Btn,
    StatList,
    StatItem
} from './Feedback.styled';



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
        <FeedbackBlock>
                <Title>Please leave feedback</Title>
            <BtnBlock >
                <Btn type="button" onClick={this.handlClickGood}>Good</Btn>
                <Btn type="button" onClick={this.handlClickNeutral}>Neutral</Btn>
                <Btn type="button" onClick={this.handlClickBad}>Bad</Btn>
            </BtnBlock>
            {this.countTotalFeedback() > 0 && (<div>
                <Title>Statistics</Title>
                <StatList>
                    <StatItem>Good: {this.state.good}</StatItem>
                    <StatItem>Neutral: {this.state.neutral}</StatItem>
                    <StatItem>Bad: {this.state.bad}</StatItem>
                    <StatItem>Total: {this.countTotalFeedback()}</StatItem>
                    <StatItem>Positive feedback: {this.countPositiveFeedbackPercentage()}%</StatItem>
                </StatList>
            </div>)}
            
       </FeedbackBlock>
   )
    }

}

