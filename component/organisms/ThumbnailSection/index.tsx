import * as React from 'react'
import ThumbnailBigImage from '../../atoms/ThumbnailBigImage';
import SnapshotThumbnailBox from '../../molecules/SnapshotThumbnailBox'
// Thumnbnail 한줄 전체 섹션 썸네일 큰 이미지와 작은이미지를 받는다. 그리고 2초마다 큰이미지의 셀렉트를 바꾼다
const ThumbnailSection = ({ bigThumbnailImageDatas, snapShotDatas }: ThumbnailSectionProps) => {

    return (
        <section>
            {
                bigThumbnailImageDatas.map((bigThumbnailImageData) => {
                    return <ThumbnailBigImage {...bigThumbnailImageData} />
                })
            }
            <div>
                <SnapshotThumbnailBox snapShotDatas={snapShotDatas} />
            </div>
        </section>
    )
}

export default ThumbnailSection;