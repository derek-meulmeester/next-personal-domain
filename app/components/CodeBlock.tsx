// Importing the Prism component from 'react-syntax-highlighter' to handle syntax highlighting
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

type Props = {
  language?: string | undefined;
  children: string;
};

export const CodeBlock = ({ children, language }: Props) => {
  return (
    <SyntaxHighlighter language={language} className="rounded-md">
      {children}
    </SyntaxHighlighter>
  )
}
