import * as React from 'react'
import { useEffect, useState } from 'react';

import ThumbnailSection from '../../organisms/ThumbnailSection';
import TodayHeadImage from '../../atoms/TodayHeadImage'

import './styles.scss'
type IndexTemplateProps = {
    thumbnail: Thumbnail
}
const Index = ({ thumbnail }: IndexTemplateProps) => {
    return (
        <div>
            <ThumbnailSection 
                nowSelect={thumbnail.nowSelect}
                bigThumbnailImageDatas={thumbnail.bigImageDatas}
                snapShotDatas={thumbnail.snapShotDatas}/>
            <section className="today-wrapper-section">
                <article className="today-content-wrapper-article">
                    <TodayHeadImage 
                        href=""
                        isSelected={true}/>
                </article>
                
            </section>
        </div>
    )
}

export default Index;