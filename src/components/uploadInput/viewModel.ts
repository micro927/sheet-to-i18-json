import { Dispatch, SetStateAction, useCallback, useRef, useState } from 'react';
import { xlsxFileToI18Json } from '../../function/xlsxFileToI18Json';
import { DataJson } from '../../type';

function useViewModel({
  setDe,
  setEn,
}: {
  setDe: Dispatch<SetStateAction<DataJson>>;
  setEn: Dispatch<SetStateAction<DataJson>>;
}) {
  const [isError, setIsError] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = useCallback((file: File) => {
    const isFileExtenstionMatch = /(\.xlsx)$/i.exec(file.name);
    return isFileExtenstionMatch;
  }, []);

  const onClickUploadButton = () => {
    fileInputRef?.current?.click();
  };

  const onClickResetButton = () => {
    (fileInputRef?.current as HTMLInputElement).value = '';
    setIsError(false);
    setIsUploaded(false);
    setDe({});
    setEn({});
  };

  const onFileInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsError(false);
    setIsUploaded(true);
    const file = e.currentTarget.files?.[0] ?? false;

    if (file) {
      setIsUploaded(true);
      if (validateFile(file)) {
        const data = await xlsxFileToI18Json(file);
        if (data) {
          const { dataDe, dataEn } = data;
          console.log(dataDe, dataEn);
          setDe(dataDe);
          setEn(dataEn);
          setIsError(false);
        }
      } else {
        setIsError(true);
        setDe({});
        setEn({});
      }
    }
  };

  return {
    fileInputRef,
    onClickUploadButton,
    onClickResetButton,
    onFileInputChange,
    isError,
    isUploaded,
  };
}

export default useViewModel;
