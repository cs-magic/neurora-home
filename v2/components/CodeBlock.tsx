import { ComponentProps } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({
  children,
  language,
  ...props
}: ComponentProps<typeof SyntaxHighlighter>) => {
  return (
    <SyntaxHighlighter language={language} style={tomorrow} {...props}>
      {children}
    </SyntaxHighlighter>
  );
};
