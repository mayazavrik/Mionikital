import { Data } from '../logreg/types/type';

const fetchLogout = async (): Promise<Data> => {
  const res = await fetch('/api/authLog/logout');
  const data: Data = await res.json();
  return data;
};
export default fetchLogout;
