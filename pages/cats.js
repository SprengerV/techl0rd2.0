import React from 'react'
import { categories } from '../content'

const cat = ({ cats }) => {
  return (
    <div className="categories">
      { cats.map((c, key) => 
        <div key={ key } className="category">{ c }</div>
      ) }
    </div>
  )
}

export const getStaticProps = async (context) => {
  
  const cats = await categories()

  return {
    props: {
      cats
    }
  }
}

export default cat
