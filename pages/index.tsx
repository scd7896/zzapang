import * as React from 'react'
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { SET_TEST_THUMBANAIL } from '../action';
import { Action } from 'redux';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        const setAction: Action = {
            type: SET_TEST_THUMBANAIL
        }
        dispatch(setAction);
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