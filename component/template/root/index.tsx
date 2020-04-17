import * as React from 'react'
import { useEffect, useState } from 'react';

import ThumbnailSection from '../../organisms/ThumbnailSection';

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
                
            </section>
        </div>
    )
}

export default Index;