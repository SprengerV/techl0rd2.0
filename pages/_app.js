import React from 'react'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import '../styles/style.global.scss'
import '../node_modules/highlight.js/styles/night-owl.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle="techl0rd Blog" description="Technically driven how-tos.">
      <Navbar/>
      <main className="content">
        <Component { ...pageProps }/>
      </main>
    </Layout>
  )
}
