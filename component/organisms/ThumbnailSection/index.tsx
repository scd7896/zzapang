import * as React from 'react'
import { useState, useEffect } from 'react'
import ThumbnailBigImage from '../../atoms/ThumbnailBigImage';
import SnapshotThumbnailBox from '../../molecules/SnapshotThumbnailBox'
import './styles.scss'
export interface ThumbnailSectionProps {
    bigThumbnailImageDatas: BigImageData[],
    snapShotDatas: snapShotImageData[],
    nowSelect: number
}
// Thumnbnail 한줄 전체 섹션 썸네일 큰 이미지와 작은이미지를 받는다. 그리고 2초마다 큰이미지의 셀렉트를 바꾼다
const ThumbnailSection = ({ bigThumbnailImageDatas, snapShotDatas, nowSelect }: ThumbnailSectionProps) => {
    const [cnt, setCnt] = useState(0);
    useEffect(()=>{
        if(cnt > bigThumbnailImageDatas.length) {
            return;
        }
        
        setCnt(cnt+1);
    },[nowSelect])
    return (
        <section className="thumbnail-section">
            {
                bigThumbnailImageDatas.map((bigThumbnailImageData, i) => {
                    console.log('vv',cnt, nowSelect)
                    return <ThumbnailBigImage 
                        bigImageUrl={bigThumbnailImageData.bigImageUrl}
                        isLoading={cnt > i}
                        isSelected={i === nowSelect}
                        key={i} />
                })
            }
            <article className="thumbnail-middle-article">
                <SnapshotThumbnailBox snapShotDatas={snapShotDatas}/>
            </article>
        </section>
    )
}

export default ThumbnailSection;