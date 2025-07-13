import type { MDXComponents } from 'mdx/types'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    code: ({ children }) => (
      <SyntaxHighlighter language="typescript" className="rounded-md">
        {children}
      </SyntaxHighlighter>
    ),
    h1: ({ children }) => (
      <h1 className="text-5xl">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl">{children}</h4>
    ),
    ...components,
  }
};
