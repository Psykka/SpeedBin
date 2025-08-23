import { Editor } from "./editor";
import { Header } from "./header";

export function App({ content }: { content?: string }) {
    return (
        <>
            <Header />
            <Editor content={content} />
        </>
    );
}
