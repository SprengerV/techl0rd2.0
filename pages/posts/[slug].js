import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../../components/CodeBlock'

const PostTemplate = ({ content, data }) => {
  const { title, date } = data

  return (<>
    <div className="header text-1">
      <h2 className="heading">{ title }</h2>
      <p className="headerDate italic">{ date }</p>
      <hr className="border-dark"/>
    </div>
    <div className="main text-1 border-6">
      <ReactMarkdown
        children={ content }
        components={ CodeBlock }
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
