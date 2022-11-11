import Editor from "@monaco-editor/react";

export function MonacoEditor({ ...props }) {
  return (
    <Editor
      height="190px"
      language="markdown"
      theme="vs-dark"
      options={{
        minimap: {
          enabled: false,
        },
        padding: {
          top: 8,
          bottom: 8,
        },
        fontFamily: "IBM Plex Mono",
        fontSize: 13,
        fontLigatures: true,
      }}
      {...props}
    />
  );
}

export default MonacoEditor;
