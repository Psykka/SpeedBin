import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from "@lezer/highlight";

export const midnightPurpleDarkTheme = createTheme({
    theme: "dark",
    settings: {
        background: "oklch(0.1677 0.0456 285)",
        foreground: "oklch(0.7500 0.0300 285)",
        caret: "oklch(0.8500 0.0800 300)",
        selection: "oklch(0.5276 0.08 285)",
        fontFamily: '"Fira Code", monospace',
        fontSize: "1em",
        lineHighlight: "transparent",
        gutterBackground: "oklch(0.1677 0.0456 285)",
        gutterForeground: "oklch(0.6000 0.0400 285)",
    },
    styles: [
        { tag: t.keyword, color: "oklch(0.82 0.12 290)" },
        { tag: t.comment, color: "oklch(0.4500 0.0300 285)", fontStyle: "italic" },
        { tag: t.string, color: "oklch(0.75 0.10 130)" },
        { tag: t.variableName, color: "oklch(0.78 0.09 260)" },
        { tag: t.number, color: "oklch(0.78 0.11 40)" },
        { tag: t.function(t.variableName), color: "oklch(0.76 0.11 310)" },
        { tag: t.operator, color: "oklch(0.70 0.04 285)" },
        { tag: t.typeName, color: "oklch(0.74 0.08 170)" },
        { tag: t.propertyName, color: "oklch(0.72 0.06 280)" },
    ],
});