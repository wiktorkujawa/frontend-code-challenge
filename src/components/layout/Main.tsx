/* eslint-disable @next/next/no-page-custom-font */
import React, {ReactNode} from 'react';
import Head from "next/head";

export interface MainContentProps {
    children: ReactNode
}

export const Main: React.FC<MainContentProps> = ({children}) => {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@600;700&family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <main className="o-container o-container--xl">{children}</main>
        </>

)
}