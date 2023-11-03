import { Dispatch, SetStateAction } from 'react';
import useViewModel from './viewModel';
import { DataJson } from '../../type';
// import { xlsxFileToI18Json } from "./function/xlsxFileToI18Json";

function UploadInput({
  setDe,
  setEn,
}: {
  setDe: Dispatch<SetStateAction<DataJson>>;
  setEn: Dispatch<SetStateAction<DataJson>>;
}) {
  const {
    fileInputRef,
    onClickUploadButton,
    onClickResetButton,
    onFileInputChange,
    isError,
    isUploaded,
  } = useViewModel({
    setDe,
    setEn,
  });
  return (
    <div className="flex w-full justify-center gap-4">
      <button
        className="min-w-[300px]"
        onClick={onClickUploadButton}
        disabled={isUploaded}
      >
        Click to upload i18 sheet file (xlsx)
      </button>
      <button
        className="min-w-[300px]"
        onClick={onClickResetButton}
        disabled={!isUploaded}
      >
        Restart
      </button>
      <input
        ref={fileInputRef}
        onChange={onFileInputChange}
        name="uploadFile"
        id="uploadFile"
        type="file"
        style={{
          visibility: 'hidden',
          height: '0px',
          width: '0px',
        }}
        accept=".xlsx"
      />
      {isError && <h1>Error</h1>}
    </div>
  );
}

export default UploadInput;
