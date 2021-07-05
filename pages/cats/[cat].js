import React from 'react'
import Link from 'next/link'
import { postsByCat } from '../content'

const CategoryTemplate = ({ cat, posts }) => {
  
  return(<>
    <h2>{ cat }</h2>
    { posts.map((post, index) =>
      <Link key={ index } href={ `/posts/${ post.slug }` }>
        <h3>{ post.title }</h3>
        <p>{ post.date }</p>
        <p>{ post.description }</p>
      </Link>
    ) }
  </>)
}

export const getStaticProps = async (context) => {
  
  const { cat } = context.query
  const posts = await postsByCat(cat)
  
  return {
    props: {
      cat,
      posts 
    }
  }
}

export default CategoryTemplate
