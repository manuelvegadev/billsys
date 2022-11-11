import {
  CodeSnippet,
  ListItem,
  OrderedList,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  UnorderedList,
} from "@carbon/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

export function RenderMarkdown({ children }) {
  return (
    <ReactMarkdown
      components={{
        ol: OrderedList,
        ul: UnorderedList,
        li: ListItem,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={vscDarkPlus}
              language={match[1]}
              showLineNumbers
              className={"syntax-highlighter"}
              useInlineStyles={true}
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <CodeSnippet
              type="inline"
              feedback="Copied to clipboard"
              className={className}
              {...props}
            >
              {children}
            </CodeSnippet>
          );
        },
        table: Table,
        thead: TableHead,
        tbody: TableBody,
        tr: TableRow,
        th: TableHeader,
        td: TableCell,
      }}
      remarkPlugins={[remarkGfm]}
      className={"react-md"}
    >
      {children}
    </ReactMarkdown>
  );
}

export default RenderMarkdown;
