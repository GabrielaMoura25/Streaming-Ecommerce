export interface IPagination {
  limit: number;
  total: number; 
  offset: number; 
  setOffSet: (offSet: number) => void;
}