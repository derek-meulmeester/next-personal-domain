import Link from 'next/link'
import { CodeBlock } from '@/app/components/CodeBlock'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
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
    hr: () => <hr className="border-gray-200" />,
    a: ({ children, href }) => (
      <Link href={href} target="_blank" rel="noopener">{children}</Link>
    ),
    table: ({ children }) => (
      <table className="table-auto divide-y divide-gray-300 ring-1 ring-gray-300 rounded-md">
        {children}
      </table>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 font-semibold">{children}</th>
    ),
    tbody: ({ children }) => (
      <tbody className="divide-y divide-gray-200">{children}</tbody>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3">{children}</td>
    ),
    code: CodeBlock,
    ...components,
  }
};
