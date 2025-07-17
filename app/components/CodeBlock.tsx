import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {materialOceanic} from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  className?: string;
  children: string;
};

export const CodeBlock = ({ children, className }: Props) => {
  const language = className?.replace('language-', '');

  return language ? (
    <SyntaxHighlighter language={language} style={materialOceanic} className="rounded-md">
      {children}
    </SyntaxHighlighter>
  ) : (
    <code className="bg-slate-200 dark:bg-slate-700 rounded-md px-1.5 py-0.5">{children}</code>
  )
};
