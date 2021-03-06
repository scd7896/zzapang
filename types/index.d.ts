interface BigImageData {
  bigImageUrl: string;
  title: string;
}
interface snapShotImageData {
  imageUrl: string;
  title: string;
}

interface RootStore {
  thumbnail: Thumbnail;
  scroll: Scroll;
}
interface ImageComponentProps {
  url: string,
  isRender: boolean
}
interface BasketItemData {
  url: string;
  description: string;
  img: string;
}
