import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Posts } from '../models';

export const postsActions = createActionGroup({
  source: 'Posts',
  events: {
    start: emptyProps(),
    success: props<{ posts: Posts[] }>(),
  },
});
