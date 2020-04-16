import * as React from 'react'


export interface ThumbnailBigImageProps {
    bigImageUrl: string;
    isLoading: boolean;
    isSelected: boolean;
}
const ThumbnailBigImage = ({ bigImageUrl, isLoading, isSelected }: ThumbnailBigImageProps) => {
    return <img src={isLoading ? bigImageUrl : ''}
        data-src={ bigImageUrl } 
        style={isSelected ? { display: 'block' }:{ display: 'none' }} />
}

export default ThumbnailBigImage;