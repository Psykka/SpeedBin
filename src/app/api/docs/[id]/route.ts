import { db } from "@/server/db";
import { doc } from "@/server/db/schema";
import { APIError, inferMessage } from "@/shared/errors";
import { APPID_REGEX } from "@/shared/ids";
import { docSelectSchema } from "@/shared/models/doc";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
    const id = params.id

    if (!APPID_REGEX.test(id)) {
        return NextResponse.json(new APIError("INVALID_ID", 400), { status: 400 })
    }

    try {
        const rows = await db
            .select()
            .from(doc)
            .where(eq(doc.id, id))

        const parsed = docSelectSchema.safeParse(rows[0])

        if (!parsed.success) {
            return NextResponse.json(new APIError("DATABASE", 500, parsed.error.message), { status: 500 })
        }

        return NextResponse.json(parsed.data)
    } catch (error) {
        const cause = inferMessage(error)
        return NextResponse.json(new APIError("UNKNOWN", 500, cause))
    }
}