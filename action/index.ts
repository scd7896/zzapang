import { 
    SET_TEST_THUMBANAIL, 
    ROTATE_SET_THUMBNAIL, 
    TARGET_SET_THUMBNAIL 
} from './actionTypes';

export const targetSetThumbnail = (payload: number) => {
    return {
        type: TARGET_SET_THUMBNAIL,
        nowSelect: payload
    }
}

export const setTestTumbnail = (payload: any) => {
    return {
        type: SET_TEST_THUMBANAIL,
        bigImageDatas: payload.bigImageDatas,
        snapShotImageDatas: payload.snapShotImageDatas
    } 
}

export const rotateThumbnail = () => {
    return {
        type: ROTATE_SET_THUMBNAIL,
        
    }
}


export type ThumbNailAction = 
| ReturnType<typeof setTestTumbnail>
| ReturnType<typeof rotateThumbnail>
| ReturnType<typeof targetSetThumbnail>