import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({children, language}) => {
  return (
    <SyntaxHighlighter language={language} style={tomorrow}>
      {children}
    </SyntaxHighlighter>
  );
};
