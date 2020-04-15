interface BigImageData {
    bigImageUrl: string,
    title: string
}
interface snapShotImageData {
    imageUrl: string,
    title: string
}
interface ThumbnailSectionProps {
    bigThumbnailImageDatas: BigImageData[],
    snapShotDatas: snapShotImageData[],
    nowSelect: number
}