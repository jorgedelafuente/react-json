export interface PostModel {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostArrayModel {
  all_posts: PostModel[];
}
