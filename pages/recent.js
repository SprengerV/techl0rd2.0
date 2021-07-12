import React from 'react'
import Link from 'next/link'
import { content } from '../content'

const Recent = ({ posts }) => {
  return (<>
    <div className="header">
      <h2 className="heading text-dark">Recent Posts</h2>  
      <hr className="border-dark"/>
    </div>
    <PostsList content={ posts }/>
  </>)
}

const PostsList = ({ content }) => {
  if (!content || !content.length) return <p>No posts found</p>

    return (<div className="main border-success">
    
      { content.map((post, i) => {
        const { frontmatter, slug } = post
        const { title, description, date } = frontmatter

        return ( 
          <Link key={ i } href={ `/posts/${ slug }` }>
            <div className="card center border-secondary preview">
              <a>  
                <div className="cardHeader text-light nav-secondary">
                 { title }
                </div>
              </a>
                <div className="cardBody text-dark">
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
