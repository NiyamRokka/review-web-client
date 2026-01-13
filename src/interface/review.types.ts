export interface IResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface IImage {
  public_id: string;
  path: string;
}

export interface IReview extends IResponse {
  user: {
    _id: string;
    name?: string;
    email?: string;
  };
  item: string; // item id
  rating: number;
  comment: string;
  images?: IImage[];
}

/**
 * Review data sent TO backend
 */
export interface IReviewData {
  item: string;        // item id
  rating: number;
  comment: string;
  images?: File[];     // for form-data uploads
}
