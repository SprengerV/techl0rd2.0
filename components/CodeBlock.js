import highlight from 'highlight.js'

const CodeBlock = ({ value }) => {
  const highlighted = highlight.highlightAuto(value).value

  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: highlighted }}/>
    </pre>
  )
}

export default CodeBlock
