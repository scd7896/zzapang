interface SnapShotData {
  imageUrl: string;
  title: string;
}

interface BigImageData {
  bigImageUrl: string;
}

interface Thumbnail {
  nowSelect: number;
  snapShotDatas: SnapShotData[];
  bigImageDatas: BigImageData[];
  timer: NodeJS.Timeout;
}

interface User {
  userName: string | null;
  userId: string | null;
}
interface CategoryData {
  
}

interface SectionItem {
  bigImageUrl: string,
  categoryDatas: CategoryData[]
}
interface Category {
  sectionItems: SectionItem[]
}

interface Scroll {
  scrollHeight: number
}