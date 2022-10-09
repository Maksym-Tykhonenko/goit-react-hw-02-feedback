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