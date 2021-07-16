// News entity types and interface

export interface News {
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
}

export interface NewsData {
  exhaustiveNbHits: boolean;
  hits: News[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  query: string;
}
