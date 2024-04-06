import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
export interface SignState {
  visible: boolean
}

// Define the initial state using that type
const initialState: SignState = {
    visible: false
}

export const signSlice = createSlice({
  name: 'sign',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    chnageSignModalVisible: (state, action: PayloadAction<boolean>) => {
        state.visible = action.payload
    },
  }
})

export const { chnageSignModalVisible, } = signSlice.actions

export const selectVisible = (state: RootState) => state.sign.visible

export default signSlice.reducer