export interface GiphyAPIResponse {
  data: Gifs[];
  pagination: any;
  meta: MetaProperties;
}

export interface Gifs {
  id: string;
  title: string;
}

export interface MetaProperties {
  status: number;
  msg: string;
  response_id: string;
}
