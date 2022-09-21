import { createSlice } from '@reduxjs/toolkit'
import type { LivestreamState } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: LivestreamState = {
  query: '',
}

const slice = createSlice({
  name: 'livestream',
  initialState,
  reducers: {
    filter: (state, action: PayloadAction<LivestreamState['query']>) => {
      state.query = action.payload
    },
  },
})

export const { filter } = slice.actions

export default slice.reducer
