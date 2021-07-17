import React from 'react'
import { categories } from '../content'
import Link from 'next/link'

const cat = ({ cats }) => {
  const categories = Object.keys(cats)

  return (
    <div className="categories">
      { categories.map((c, key) => 
        <div key={ key } className="category card bg-6 border-4">
          <div className="cardHeader nav-secondary">
            <div className="cardHeading text-7">{ c }</div>
          </div>
          <div className="cardBody">    
            { cats[c].map((post, index) => 
              <Link
                key={ index }
                href={ `/posts/${ post.slug }` }
                style={{ textDecoration: 'none' }}
              >
                <a className="catPost text-0">
                  <h3>{ post.title }</h3>
                  <p className="text-4">{ post.date }</p>
                </a> 
              </Link>
            ) }
          </div>
        </div>
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
