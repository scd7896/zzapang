import { UserActionType } from "../action/user";
import { SET_USERDATA_REQUEST } from "../action/actionTypes";

const user = (state: User, action: UserActionType): User => {
  switch (action.type) {
    case SET_USERDATA_REQUEST:
      return {
        userId: null,
        userName: null,
      };
    default:
      return { ...state };
  }
};

export default user;
