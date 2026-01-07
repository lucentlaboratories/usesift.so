import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  // Custom components for styling
  const components: Components = {
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold mt-12 mb-6 first:mt-0 text-foreground">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-12 mb-6 first:mt-0 text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mt-6 mb-3 text-foreground">
        {children}
      </h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-lg font-semibold mt-4 mb-2 text-foreground">
        {children}
      </h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-base font-semibold mt-4 mb-2 text-foreground">
        {children}
      </h6>
    ),
    p: ({ children }) => (
      <p className="my-6 leading-7 text-lg text-foreground">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-outside space-y-3 my-6 text-foreground pl-6">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-outside space-y-3 my-6 text-foreground pl-6">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-7 text-lg">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/50 pl-6 italic my-8 text-muted-foreground text-lg leading-7">
        {children}
      </blockquote>
    ),
    code: ({ className, children, ...props }: any) => {
      const inline = (props as any).inline;
      if (inline) {
        return (
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground" {...props}>
            {children}
          </code>
        );
      }
      return (
        <code className={`${className} text-sm`} {...props}>
          {children}
        </code>
      );
    },
    pre: ({ children }) => (
      <pre className="bg-card/50 rounded-lg p-4 overflow-x-auto my-6 border border-border">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:underline font-medium"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => (
      <strong className="font-bold text-foreground">
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-8">
        <table className="min-w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="bg-card/50">
        {children}
      </thead>
    ),
    tbody: ({ children }) => (
      <tbody>
        {children}
      </tbody>
    ),
    tr: ({ children }) => (
      <tr className="border-b border-border">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-foreground">
        {children}
      </td>
    ),
    hr: () => (
      <hr className="my-8 border-border" />
    ),
  };

  return (
    <div className="prose dark:prose-invert prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
