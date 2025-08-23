export function Editor({ content }: { content?: string }) {
    return (
        <main>
            <h2>Code Editor</h2>
            <textarea
                defaultValue={content}
                style={{ width: "100%", height: "300px", fontFamily: "monospace" }}
            />
        </main>
    );
}
