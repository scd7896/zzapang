import { SET_USERDATA_REQUEST } from "./actionTypes"

const setUserDataRequest = (payload?: string) => {
  return {
    type: SET_USERDATA_REQUEST,
    payload
  }
}

export type UserActionType = 
| ReturnType <typeof setUserDataRequest>