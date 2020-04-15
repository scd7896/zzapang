import { Action } from "redux";
import { SET_TEST_THUMBANAIL } from "../action";
import { ThumbnailList } from '../dummyData'
const thumbnail = (state: ThumbnailSectionProps, action: Action) => {
    switch(action.type) {
        case SET_TEST_THUMBANAIL :
            return {...ThumbnailList}
        default:
            return {...state}
    }
}

export default thumbnail;