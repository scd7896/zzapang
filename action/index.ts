import { SET_TEST_THUMBANAIL, ROTATE_SET_THUMBNAIL } from './actionTypes'

export const setTestTumbnail = (payload: any) => {
    return {
        type: SET_TEST_THUMBANAIL,
        bigImageDatas: payload.bigImageDatas,
        snapShotImageDatas: payload.snapShotImageDatas
    } 
}

export const rotateThumbnail = () => {
    return {
        type: ROTATE_SET_THUMBNAIL
    }
}


export type ThumbNailAction = 
| ReturnType<typeof setTestTumbnail>
| ReturnType<typeof rotateThumbnail>