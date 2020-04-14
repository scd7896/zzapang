import * as React from 'react'
import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => {
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