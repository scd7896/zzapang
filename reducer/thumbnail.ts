import { SET_TEST_THUMBANAIL } from '../action/actionTypes';
import { ThumbNailAction } from "../action";

const thumbnail = (state: any, action: ThumbNailAction): Thumbnail => {
    switch(action.type) {
        case SET_TEST_THUMBANAIL :
            
            return { ...state,}
        default:
            return { ...state }
    }
}

export default thumbnail;