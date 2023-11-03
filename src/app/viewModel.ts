import { useState } from 'react';
import { DataJson } from '../type';

function useViewModel() {
  const [de, setDe] = useState<DataJson>({});
  const [en, setEn] = useState<DataJson>({});

  return { de, setDe, en, setEn };
}

export default useViewModel;
