import { docSelectSchema, type Doc } from "./models/doc";

export async function getDoc(id: string): Promise<Doc> {
    const res = await fetch(`/api/docs/${id}`, {
        method: 'GET',
    })

    if (!res.ok) {
        throw new Error("Failed to fetch document")
    }

    const parsed = docSelectSchema.safeParse(res.json())

    if (!parsed.success) {
        throw new Error("Documento not valid")
    }

    return parsed.data
}

export async function createDoc(doc: Doc) {
    const res = await fetch('/api/docs', {
        method: "POST",
        body: JSON.stringify(doc)
    })

    if (!res.ok) {
        throw new Error("Failed to post document")
    }

    const parsed = docSelectSchema.safeParse(res.json())

    if (!parsed.success) {
        throw new Error("Documento not valid")
    }

    return parsed.data
}