import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { AIGCMechanismDataType } from '../../types'

// Define a type for the slice state
export interface BusinessState {
  editAIGCMechanismData: AIGCMechanismDataType
}

// Define the initial state using that type
const initialState: BusinessState = {
  editAIGCMechanismData: {
    id: '',
    name: '',
    product: '',
    productType: '',
    mechanismType: '',
    description: '',
    tags: [],
    website: '',
    logo: '',
    area: '',
    address: '',
  }
}

export const AIGCMechanismSlice = createSlice({
  name: 'AIGCMechanism',
  initialState,
  reducers: {
    setEditAIGCMechanismData: (state, action: PayloadAction<AIGCMechanismDataType>) => {
        state.editAIGCMechanismData = action.payload
    },
  }
})

export const { setEditAIGCMechanismData, } = AIGCMechanismSlice.actions

export const selectEditAIGCMechanismData = (state: RootState) => state.AIGCMechanism.editAIGCMechanismData

export default AIGCMechanismSlice.reducer