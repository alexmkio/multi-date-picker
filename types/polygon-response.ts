type StockResult = {
  T: string;
  c: number;
  h: number;
  l: number;
  o: number;
  t: number;
  v: number;
  vw: number;
};

export type PolygonResponse = {
  adjusted: boolean;
  queryCount: number;
  request_id: string;
  results: StockResult[];
  resultsCount: number;
  status: string;
  ticker: string;
};
