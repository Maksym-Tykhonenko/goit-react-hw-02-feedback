import {Title, StatList, StatItem} from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <Title>Statistics</Title>
            <StatList>
                <StatItem>Good: {good}</StatItem>
                <StatItem>Neutral: {neutral}</StatItem>
                <StatItem>Bad: {bad}</StatItem>
                <StatItem>Total: {total}</StatItem>
                <StatItem>Positive feedback: {positivePercentage}%</StatItem>
            </StatList>
        </div>
    )
};