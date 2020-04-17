import * as React from 'react'
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { ThumbnailList } from '../dummyData'
import { setTestTumbnail, rotateThumbnail } from '../action';
import IndexTemplate from '../component/template/root';
import ThumbnailSection from '../component/organisms/ThumbnailSection'
import './styles.scss'
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    const thumbnail: Thumbnail = useSelector<RootStore>(state => state.thumbnail) as Thumbnail;    
    const [timer, setTimer] = useState<NodeJS.Timeout>();
    const dispatch = useDispatch();
    useEffect(() => {
        if(thumbnail.nowSelect === 2) {
            clearInterval(timer!);
            setTimer(undefined);
            return;
        }
        if(timer) {
            return
        }
        setTimer(setInterval(()=>{
            dispatch(rotateThumbnail())
        }, 2500))
    },[thumbnail.nowSelect])
    return(
        <div>
            <IndexTemplate thumbnail={thumbnail} />
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
        snapShotImageDatas: snapshotImageDatas,
        timer: null
    }
    store.dispatch(setTestTumbnail(payload));
    
    return { userAgent }
}
export default Home