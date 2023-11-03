import UploadInput from '../components/uploadInput';
import CodeBlockJson from '../components/codeBlockJson';
import useViewModel from './viewModel';

function App() {
  const { en, de, setEn, setDe } = useViewModel();

  return (
    <div className="w-full p-9">
      <div className="p-5">
        <UploadInput setDe={setDe} setEn={setEn} />
      </div>
      <div className="mt-5 flex gap-4">
        <CodeBlockJson title="German (de.json)" jsonObject={de} />
        <CodeBlockJson title="English (en.json)" jsonObject={en} />
      </div>
    </div>
  );
}

export default App;
