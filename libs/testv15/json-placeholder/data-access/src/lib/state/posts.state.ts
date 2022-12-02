import { Posts } from '../models';

export interface PostsState {
  posts: Posts[];
  error: string | null;
}

export const initialPostsState: PostsState = {
  posts: [],
  error: null,
};
  