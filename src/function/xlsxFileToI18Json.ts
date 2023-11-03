import { Dispatch, SetStateAction } from 'react';
import { utils, read } from 'xlsx';
import { SHEET_NAME } from '../constants';
import { DataJson } from '../type';

export const xlsxFileToI18Json = async (
  file: File,
  setIsError: Dispatch<SetStateAction<boolean>>,
) => {
  type DataRow = { Key: string; DE: string; EN: string };

  try {
    const fileData = read(await file.arrayBuffer(), {
      type: 'array',
    });
    const dataDe: DataJson = {};
    const dataEn: DataJson = {};

    const sheets = fileData.Sheets[SHEET_NAME];

    utils.sheet_to_json<DataRow>(sheets).map((list) => {
      dataEn[list.Key] = list.EN;
      dataDe[list.Key] = list.DE;
    });

    return { dataDe, dataEn };
  } catch (err) {
    setIsError(true);
    return false;
  }
};
