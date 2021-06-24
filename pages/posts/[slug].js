import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const PostTemplate = ({ content, data }) => {
  const { title } = data

  return (<>
    <h2>{ title }</h2>
    <ReactMarkdown
      children={ content }
    />
  </>)
}

PostTemplate.getInitialProps = async (context) => {
  const { slug  } = context.query
  const post = await import(`../../content/${ slug }.md`)
  return {
    ...matter(post.default),
    slug
  }
}

export default PostTemplate
