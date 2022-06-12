export type AppStateType = {
  images: ImageType[];
  apiLoader: boolean;
  activeUserId: string;
  isNetworkAvailable: boolean;
};

export type ImageType = {
  id: string;
  title: string;
  imageUrl: string;
  comments: CommentType[];
};

export type CommentType = {
  id: string;
  userId: string;
  body: string;
};
