import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../components/CodeBlock'

const PostTemplate = ({ content, data }) => {
  const { title, date } = data

  return (<>
    <h2>{ title }</h2>
    <p className="italic">{ date }</p>
    <ReactMarkdown
      children={ content }
      renderers={{ code: CodeBlock }}
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
