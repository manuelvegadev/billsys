import {
  Layer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tile,
} from "@carbon/react";
import { Code, View } from "@carbon/icons-react";
import { MonacoEditor } from "../monaco-editor";
import { RenderMarkdown } from "../render-markdown";
import { useState } from "react";

/** @type {MDEditorType} */
export const MDEditor = ({ initialValue, onChange }) => {
  const [editorValue, setEditorValue] = useState(initialValue);
  return (
    <Tabs>
      <TabList aria-label={"Description"}>
        <Tab
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5em",
          }}
        >
          <Code />
          Editor
        </Tab>
        <Tab
          style={{
            display: "flex",
            alignItems: "center",
            gap: ".5em",
          }}
        >
          <View />
          Preview
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel style={{ paddingRight: 0, paddingLeft: 0 }}>
          <MonacoEditor
            defaultValue={editorValue}
            onChange={(value) => {
              setEditorValue(value);
              if (onChange) onChange(value);
            }}
          />
        </TabPanel>
        <TabPanel style={{ paddingRight: 0, paddingLeft: 0 }}>
          <Layer>
            <Tile style={{ height: "190px", overflow: "auto" }}>
              <RenderMarkdown>{editorValue}</RenderMarkdown>
            </Tile>
          </Layer>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default MDEditor;
