import { SET_TEST_THUMBANAIL } from './actionTypes'
type init = {
    type: "@@INIT"
}
export const setTestTumbnail = (payload: any) => {
    return {
        type: SET_TEST_THUMBANAIL,
        bigImageDatas: payload.bigImageDatas,
        snapShotImageDatas: payload.snapShotImageDatas
    }
}


export type ThumbNailAction = 
| init
| ReturnType<typeof setTestTumbnail>