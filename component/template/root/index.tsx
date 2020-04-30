import * as React from "react";
import { useEffect, useState } from "react";

import ThumbnailSection from "../../organisms/ThumbnailSection";
import TodayHeadImage from "../../atoms/TodayHeadImage";
import CategoryNav from "../../molecules/CategoryNav";
import CategorySection from "../../organisms/CategoryMain/Section";
import { oneCategoryItem, bigImage } from '../../../dummyData/index';
import { getRandomColor } from '../../../util/index';
import "./styles.scss";

type IndexTemplateProps = {
  thumbnail: Thumbnail;
};

const categoryDummys = [oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem];
const Index = ({ thumbnail }: IndexTemplateProps) => {
  const [randomColors, setRandomColors] = useState<Array<string>>([]);
  const [isCategoryRender, setIsCategoryRender] = useState<boolean>(false);
  const categoryScrollHandler = (event: Event) => {
    if (isCategoryRender) {
      
      window.removeEventListener('scroll', categoryScrollHandler);
      return;
    }
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.documentElement.scrollTop;
    const scrollPos = scrollHeight - scrollTop;
    if (clientHeight + 80 > scrollPos) {
      setIsCategoryRender(true);
      window.removeEventListener('scroll', categoryScrollHandler);
    }
  }

  useEffect(()=>{
    const nextArr = []
    for (let i = 0 ; i < 9; i++) {
      nextArr.push(getRandomColor())
    }
    setRandomColors(nextArr);

    window.addEventListener('scroll', categoryScrollHandler)

    return () => {
      window.removeEventListener('scroll', categoryScrollHandler);
    }
  }, [])
  return (
    <section className="main-template-wrapper">
      <ThumbnailSection
        nowSelect={thumbnail.nowSelect}
        bigThumbnailImageDatas={thumbnail.bigImageDatas}
        snapShotDatas={thumbnail.snapShotDatas}
      />
      <section className="today-wrapper-section">
        <article className="today-content-wrapper-article">
          <TodayHeadImage href="" isSelected={true} />
        </article>
      </section>
      { isCategoryRender && 
        <section className="main-categoty-view">
          <h1>카테고리 전체 보기</h1>
          <CategoryNav />
          { randomColors &&
          randomColors.map((color, index) => {
            return <CategorySection categoryItems={categoryDummys} bigImageUrl={bigImage} color={color} key={index}/>  
          })}
        </section>
      }
    </section>
  );
};

export default Index;
