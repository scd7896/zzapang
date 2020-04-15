import * as React from 'react'
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';

import { Action } from 'redux';
import { ThumbnailList } from '../dummyData'
import { setTestTumbnail } from '../action';
const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        
    },[])
    return(
        <div>
            hello world
            <p>userAgent : { userAgent }</p>
        </div>
    )
}
Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] || "" : navigator.userAgent;
    
    return { userAgent }
}
export default Home