import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock = {
  
  code({ node, inline, className, children, ...props }) {
    const match = className[1]
    
    return ( 
      
      <div className="code">
        <SyntaxHighlighter 
          language={ match }
          style={ dracula }
        >
          { children }
        </SyntaxHighlighter>
      </div>

    )
  }
}

export default CodeBlock
