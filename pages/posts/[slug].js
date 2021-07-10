import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../components/CodeBlock'

const PostTemplate = ({ content, data }) => {
  const { title, date } = data

  return (<>
    <div className="header text-dark">
      <h2 className="heading">{ title }</h2>
      <p className="headerDate italic">{ date }</p>
      <hr className="border-dark"/>
    </div>
    <div className="main border-success">
      <ReactMarkdown
        children={ content }
        renderers={{ code: CodeBlock }}
      />
    </div>
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
