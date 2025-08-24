import { Editor } from "./editor";
import { Header } from "./header";

export function App({ content }: { content?: string }) {
    return (
        <div className="h-screen bg-midnightpurple text-white">
            <Header />
            <Editor content={content} />
        </div>
    );
}
