import { configureStore } from '@reduxjs/toolkit'
import beritaReducer from 'containers/ProfilePage/Berita/reducer'
import livestreamReducer from 'containers/ProfilePage/Livestream/reducer'
import quizReducer from 'containers/ProfilePage/Quiz/reducer'

export const store = configureStore({
  reducer: {
    berita: beritaReducer,
    livestream: livestreamReducer,
    quiz: quizReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
