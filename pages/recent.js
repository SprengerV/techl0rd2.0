import React from 'react'
import Link from 'next/link'
import { content } from '../content'

const Recent = ({ posts }) => {
  return (<>
    <h2>Recent Posts</h2>  
    <hr/>
    <PostsList content={ posts }/>
  </>)
}

const PostsList = ({ content }) => {
  if (!content || !content.length) return <p>No posts found</p>

  return (
    <ul>
      { content.map(post => {
        const { frontmatter, slug } = post
        const { title, description, date } = frontmatter

        return (<li key={ slug }>
          <Link href={ `/posts/${ slug }` }>
            <a>
              <h3>{ title }</h3>
              <p>{ date }</p>
              <p>{ description }</p>
            </a>
          </Link>
        </li>) 
      }) } 
    </ul> 
  )
}

export async function getStaticProps() {
  const postsData = content()

  return {
    props: {
      posts: postsData
    }
  }
}

export default Recent
