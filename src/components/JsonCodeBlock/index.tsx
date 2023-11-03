import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DataJson } from '../../type';
import useViewModel from './viewModel';

function JsonCodeBlock({
  title,
  jsonObject,
}: {
  title: string;
  jsonObject: DataJson;
}) {
  const { copyText, isShowTextCopiedMessage } = useViewModel();
  const jsonString = JSON.stringify(jsonObject, null, 2);

  return (
    <div className="flex w-full flex-col gap-1">
      <div className="flex gap-1">
        <p className="font-semibold">{title}</p>
        {isShowTextCopiedMessage && <p className="text-green-500">Copied!</p>}
      </div>
      <SyntaxHighlighter
        language="json"
        wrapLines
        wrapLongLines
        style={dracula}
        className="w-full rounded-md transition duration-200 hover:-translate-y-1 hover:cursor-pointer hover:brightness-125"
        onClick={() => copyText(jsonString)}
      >
        {jsonString}
      </SyntaxHighlighter>
    </div>
  );
}

export default JsonCodeBlock;
