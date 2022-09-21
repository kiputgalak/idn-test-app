import { createSlice } from '@reduxjs/toolkit'
import type { BeritaState } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: BeritaState = {
  query: '',
}

const slice = createSlice({
  name: 'berita',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<BeritaState['query']>) => {
      state.query = action.payload
    },
  },
})

export const { filter } = slice.actions

export default slice.reducer
