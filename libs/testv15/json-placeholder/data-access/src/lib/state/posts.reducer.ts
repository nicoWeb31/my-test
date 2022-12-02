import { createReducer, on } from '@ngrx/store';
import { postsActions } from './posts.actions';
import { initialPostsState } from './posts.state';

export const postsReducer = createReducer(
  initialPostsState,
  on(postsActions.start, (state) => {
    return state;
  }),
  on(postsActions.success, (state, action) => {
    return {
      ...state,
      posts: action.posts,
    };
  })
);
