import { SET_TEST_THUMBANAIL, ROTATE_SET_THUMBNAIL } from '../action/actionTypes';
import { ThumbNailAction } from "../action";

const thumbnail = (state: Thumbnail, action: ThumbNailAction): Thumbnail => {
    switch(action.type) {
        
        case SET_TEST_THUMBANAIL :
            return { 
                ...state,
                nowSelect: 0,
                snapShotDatas: action.snapShotImageDatas!,
                bigImageDatas: action.bigImageDatas!
            }
        case ROTATE_SET_THUMBNAIL :
            if(state.nowSelect === state.bigImageDatas.length-1) {
                return {
                    ...state,
                    nowSelect: 0
                }
            }
            return {
                ...state,
                nowSelect: state.nowSelect + 1
            }
        default:
            return { ...state }
    }
}

export default thumbnail;