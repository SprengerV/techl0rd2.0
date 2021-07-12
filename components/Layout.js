import React from 'react'
import Head from 'next/head'

export default function Layout({ children, pageTitle, description }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="utf-8"/>
      <meta name="Description" content={ description }/>
      <title>{ pageTitle }</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inconsolatia:wght@300&display=swap"/>
    </Head>
    <main>
      { children }
    </main>
  </>)
}
