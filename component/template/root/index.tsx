import * as React from "react";
import { useEffect, useState } from "react";

import ThumbnailSection from "../../organisms/ThumbnailSection";
import TodayHeadImage from "../../atoms/TodayHeadImage";
import CategoryNav from "../../molecules/CategoryNav";
import CategorySection from "../../organisms/CategoryMain/Section";
import { oneCategoryItem, bigImage } from '../../../dummyData/index';

import "./styles.scss";
type IndexTemplateProps = {
  thumbnail: Thumbnail;
};
const categoryDummys = [oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem,oneCategoryItem];
const Index = ({ thumbnail }: IndexTemplateProps) => {
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
      <section className="main-categoty-view">
        <CategoryNav />
        <CategorySection categoryItems={categoryDummys} bigImageUrl={bigImage}/>
      </section>
    </section>
  );
};

export default Index;
