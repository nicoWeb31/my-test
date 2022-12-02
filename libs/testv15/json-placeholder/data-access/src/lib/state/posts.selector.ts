import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const POSTS_STATE_NAME = 'posts';
export const getPostsState =
  createFeatureSelector<PostsState>(POSTS_STATE_NAME);
export const postsSelector = createSelector(
  getPostsState,
  (state) => state.posts
);
