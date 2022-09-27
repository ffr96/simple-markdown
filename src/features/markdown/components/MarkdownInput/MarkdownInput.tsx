import { TitleText } from '../TitleText/TitleText';
import { TextArea } from '@/components/Elements/TextArea';

export const MarkdownInput = ({
  input,
  setInput,
}: {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <TitleText>Markdown Editor</TitleText>
      <TextArea
        id='editor'
        autoFocus
        value={input}
        className='text-blue-200 min-h-[250px] transition-shadow shadow-none focus:shadow-lg focus:shadow-blue-300'
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};
