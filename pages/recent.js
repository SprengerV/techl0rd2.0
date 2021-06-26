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

    return (<>
    
      { content.map(post => {
        const { frontmatter, slug } = post
        const { title, description, date } = frontmatter

        return ( 
          <Link href={ `/posts/${ slug }` }>
            <a>
              <div className="card">
                <div className="cardHeader text-light nav-info">
                 { title }
                </div>
                <div className="cardBody">
                  <p>{ date }</p>
                  <p>{ description }</p>
                </div>
              </div>
            </a>
          </Link>
        ) 
      }) } 
     
    </>)
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
