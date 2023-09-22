import { Options, Option } from './styled';
const options = ['All', 'action', 'drama', 'crime', 'romantic', 'horror', 'documentary'];

export const Sort: React.FC = () => {
  return (
    <Options>
      {options.map((option) => (
        <Option key={option}>{option}</Option>
      ))}
    </Options>
  );
};
