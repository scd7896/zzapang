import * as React from 'react';
import SnapshotThumbnail,{ SnapshotThumbnailProps } from '../../atoms/SnapshotThumbnail';
import './styles.scss';
interface SnapshotThumbnailBoxProps {
    snapShotDatas: snapShotImageData[]
}

// 썸네일 이미지들을 렌더링해줄 박스 컴포넌트
const SnapshotThumbnailBox = ({ snapShotDatas }: SnapshotThumbnailBoxProps) => {
    return (
        <ul className="snapshot-thumbnail-container">
            {
                snapShotDatas.map((snapShotData, index) => {
                    return (
                        <SnapshotThumbnail 
                        title={snapShotData.title} 
                        imageUrl={snapShotData.imageUrl} 
                        index={index}
                        key={index}/>
                    )
                })
            }
        </ul>
    )
}

export default SnapshotThumbnailBox;