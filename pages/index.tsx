import * as React from 'react'
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { ThumbnailList } from '../dummyData'
import { setTestTumbnail, rotateThumbnail } from '../action';
import ThumbnailSection from '../component/organisms/ThumbnailSection'
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    const thumbnail: Thumbnail = useSelector<RootStore>(state => state.thumbnail) as Thumbnail;    
    const [timer, setTimer] = useState<NodeJS.Timeout>();
    const dispatch = useDispatch();
    useEffect(() => {
        setTimer(setTimeout(()=>{
            dispatch(rotateThumbnail())
        }, 2500))
    },[])
    return(
        <div>
            hello world
            <p>userAgent : { userAgent }</p>
            <ThumbnailSection 
                nowSelect={thumbnail.nowSelect}
                bigThumbnailImageDatas={thumbnail.bigImageDatas}
                snapShotDatas={thumbnail.snapShotDatas}
            />
        </div>
    )
}
Home.getInitialProps = async ({req, store}) => {
    const userAgent = req ? req.headers['user-agent'] || "" : navigator.userAgent;
    const bigImageDatas = ThumbnailList.bigThumbnailImageDatas.map((el) => {
        return {
            bigImageUrl: el.bigImageUrl
        }
    });
    
    const snapshotImageDatas = ThumbnailList.snapShotDatas.map((el) => {
        return {
            imageUrl: el.imageUrl,
            title: el.title
        }
    })
    const payload = {
        bigImageDatas: bigImageDatas,
        snapShotImageDatas: snapshotImageDatas
    }
    store.dispatch(setTestTumbnail(payload));
    
    return { userAgent }
}
export default Home