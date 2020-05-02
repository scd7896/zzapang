import { ScrollActionType } from "../action/scroll";
import { SET_BASESCROLL_HEIGHT } from "../action/actionTypes";

const initialState: Scroll = {
  scrollHeight: 1540
}
const scroll = (state: Scroll = initialState, action: ScrollActionType): Scroll => {
  switch(action.type) {
    case SET_BASESCROLL_HEIGHT :
      return {
        ...state,
        scrollHeight: action.payload
      }
    default: return { ...state }
  }
}

export default scroll;