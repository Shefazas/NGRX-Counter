import { postsReducer } from "../posts/state/posts.reducer.";
import { PostsState } from "../posts/state/posts.state";
import { counterReducer } from "../state/counter.reducer";
import { counterState } from "../state/counter.state";

export interface AppState {
    counter: counterState;
    posts: PostsState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer,
}