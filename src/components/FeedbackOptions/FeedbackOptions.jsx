import PropTypes from 'prop-types';
import { BtnBlock, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
      <BtnBlock>
        {options.map((option, id) => {
          return (
            <Btn
              key={id}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Btn>
          );
        })}
      </BtnBlock>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}