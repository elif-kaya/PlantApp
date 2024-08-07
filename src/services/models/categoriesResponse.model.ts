export interface Image {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: string | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
  }
  
  // Interface for Plant data
  export interface Plant {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    rank: number;
    image: Image;
  }
  
  // Interface for Meta data
  export interface PaginationMeta {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
  
  // Interface for API Response
  export interface CategoriesResponse {
    data: Plant[];
    meta: {
      pagination: PaginationMeta;
    };
  }