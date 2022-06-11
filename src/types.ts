export type AppStateType = {
  images: ImageType[];
  apiLoader: boolean;
  activeUserId: string;
};

export type HomeScreenStateType = {
  searchString: string;
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
