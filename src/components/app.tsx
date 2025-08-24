import { Editor } from "./editor";
import { Header } from "./header";

export function App({ content }: { content?: string }) {
    return (
        <div className="bg-midnightpurple">
            <Header />
            <Editor content={content} />
        </div>
    );
}
