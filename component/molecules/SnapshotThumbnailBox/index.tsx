import * as React from 'react';
import SnapshotThumbnail from '../../atoms/SnapshotThumbnail';

// 썸네일 이미지들을 렌더링해줄 박스 컴포넌트
const SnapshotThumbnailBox = ({ snapShotDatas }: SnapshotThumbnailBoxProps) => {
    return (
        <div>
            {
                snapShotDatas.map((snapShotData) => {
                    return (
                        <SnapshotThumbnail {...snapShotData}/>
                    )
                })
            }
        </div>
    )
}

export default SnapshotThumbnailBox;