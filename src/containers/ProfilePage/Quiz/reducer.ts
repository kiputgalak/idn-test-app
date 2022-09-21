import { createSlice } from '@reduxjs/toolkit'
import type { QuizState } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: QuizState = {
  query: '',
}

const slice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<QuizState['query']>) => {
      state.query = action.payload
    },
  },
})

export const { filter } = slice.actions

export default slice.reducer
