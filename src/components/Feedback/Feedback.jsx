import { Component } from "react";
import { Notification } from '../Notification/Notification';
import { Statistics } from '../Statistics/Statistics';
import {FeedbackOptions} from '../FeedbackOptions/FeedbackOptions';

import {
    FeedbackBlock,
    Title
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

    onLeaveFeedback = (option) => {
        this.setState(prevState => ({
            [option]: prevState[option] +1,
        }))
    }

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const options = Object.keys(this.state);

        return(
        <FeedbackBlock>
           <Title>Please leave feedback</Title>
           <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
            {total > 0 ? (
                <Statistics 
                    good={good} 
                    neutral={neutral} 
                    bad={bad} 
                    total={total} 
                    positivePercentage={positivePercentage}/>
                ) : (
                <Notification message="There is no feedback" />)} 
        </FeedbackBlock>
   )
    }

}

