import React from 'react'
import Layout from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle="techl0rd Blog" description="Technically driven how-tos.">
      <Component { ...pageProps }/>
    </Layout>
  )
}
