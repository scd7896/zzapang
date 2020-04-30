import * as React from "react";
import { useEffect, useState } from "react";

import ThumbnailSection from "../../organisms/ThumbnailSection";
import TodayHeadImage from "../../atoms/TodayHeadImage";

import "./styles.scss";
import CategoryNav from "../../molecules/CategoryNav";
type IndexTemplateProps = {
  thumbnail: Thumbnail;
};
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
      </section>
    </section>
  );
};

export default Index;
