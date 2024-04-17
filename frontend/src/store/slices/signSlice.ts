import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { UserSignInfoType } from '../../types'

// Define a type for the slice state
export interface SignState {
  visible: boolean,
  userSignedInfo: UserSignInfoType,
}

const userInfoStr = localStorage.getItem('userInfo')
const userInfo = userInfoStr && JSON.parse(userInfoStr)

// Define the initial state using that type
const initialState: SignState = {
    visible: false,
    userSignedInfo: userInfo || {
      account: '',
      password: '',
      token: '',
    }
}

export const signSlice = createSlice({
  name: 'sign',
  initialState,
  reducers: {
    changeSignModalVisible: (state, action: PayloadAction<boolean>) => {
        state.visible = action.payload
    },
    setUserSignedInfo: (state, action: PayloadAction<UserSignInfoType>) => {
        state.userSignedInfo = action.payload
        localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
  }
})

export const { changeSignModalVisible, setUserSignedInfo, } = signSlice.actions

export const selectVisible = (state: RootState) => state.sign.visible
export const selectUserSignedInfo = (state: RootState) => state.sign.userSignedInfo

export default signSlice.reducer