import React from 'react'
import Link from 'next/link'
import { content } from '../content'

const Recent = ({ posts }) => {
  return (<>
    <div className="header">
      <h2 className="heading text-1">Recent Posts</h2>  
      <hr className="border-dark"/>
    </div>
    <PostsList content={ posts }/>
  </>)
}

const PostsList = ({ content }) => {
  if (!content || !content.length) return <p>No posts found</p>

    return (<div className="main border-6">
    
      { content.map((post, i) => {
        const { frontmatter, slug } = post
        const { title, description, date } = frontmatter

        return ( 
          <Link
            key={ i }
            href={ `/posts/${ slug }` }
            style={{ textDecoration: 'none'  }}
          >
            <div className="card center bg-7 border-4 preview">
              <a>  
                <div className="cardHeader text-light nav-secondary">
                  <div className="cardHeading">{ title }</div>
                </div>
              </a>
                <div className="cardBody text-1">
                  <p>{ date }</p>
                  <p>{ description }</p>
                </div>
              </div>
          </Link>
        ) 
      }) } 
     
    </div>)
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
