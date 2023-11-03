import { utils, read } from 'xlsx';
import { DataJson } from '../type';

export const xlsxFileToI18Json = async (file: File) => {
  type DataRow = { Key: string; DE: string; EN: string };

  try {
    const fileData = read(await file.arrayBuffer(), {
      type: 'array',
    });
    const dataDe: DataJson = {};
    const dataEn: DataJson = {};

    const sheets = fileData.Sheets['Sheet1'];

    utils.sheet_to_json<DataRow>(sheets).map((list) => {
      dataEn[list.Key] = list.EN;
      dataDe[list.Key] = list.DE;
    });

    return { dataDe, dataEn };
  } catch (err) {
    return false;
  }
};
