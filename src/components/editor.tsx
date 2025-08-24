"use client"
import CodeMirror from '@uiw/react-codemirror';
import { midnightPurpleDarkTheme } from "./ui/code-mirror-theme";
import { javascript } from "@codemirror/lang-javascript"

export function Editor({ content }: { content?: string }) {
    return (
        <CodeMirror
            value={content}
            onChange={() => { }}
            theme={midnightPurpleDarkTheme}
            extensions={[javascript()]}
            height="100vh"
        />
    );
}
