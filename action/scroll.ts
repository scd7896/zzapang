import { SET_BASESCROLL_HEIGHT } from "./actionTypes"


export const setBaseScrollHeight = (payload: number) => {
  return {
    type: SET_BASESCROLL_HEIGHT,
    payload: payload
  }
}
export type ScrollActionType = 
| ReturnType<typeof setBaseScrollHeight>