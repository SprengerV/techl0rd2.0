import React from 'react'
import Head from 'react/head'

export default function Layout({ children, pageTitle, description }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta charSet="utf-8"/>
      <meta name="Description" content={ description }/>
      <title>{ pageTitle }</title>
    </Head>
    <main>
      { children }
    </main>
  </>)
}
