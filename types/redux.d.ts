interface SnapShotData {
    imageUrl: string;
    title: string;
}
interface BigImageData {
    bigImageUrl: string;
}
interface Thumbnail {
    nowSelect: number,
    snapShotDatas: SnapShotData[],
    bigImageDatas: BigImageData[]
}