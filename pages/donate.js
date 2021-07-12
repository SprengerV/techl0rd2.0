import React from 'react'

export const Donate = ({ coins }) => {
  return (
    { JSON.stringify(coins) }
  )
}

export const getStaticProps = async () => {
  const coins = await import('./src/coins.js')
  
  return {
    props: {
      coins
    }
  }
}
