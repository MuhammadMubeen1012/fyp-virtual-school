import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <React.Fragment>
            <Head>
                <title>Ek-School -  The National Virtual School System.</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Ek-School -  The National Virtual School System." />
                <meta name="og:title" property="og:title" content="Ek-School -  The National Virtual School System."></meta>
                <meta name="twitter:card" content="Ek-School -  The National Virtual School System."></meta>
                <link rel="canonical" href="https://edemy-react.envytheme.com/"></link>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"></link>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                    crossOrigin="anonymous"
                />
            </Head>

            {children}

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </React.Fragment>
    );
}

export default Layout;
