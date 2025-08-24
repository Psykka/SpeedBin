import { db } from "@/server/db";
import { doc } from "@/server/db/schema";
import { APIError, inferMessage } from "@/shared/errors";
import { docInsertSchema } from "@/shared/models/doc";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const parsed = docInsertSchema.safeParse(req.body)

    if (!parsed.success) {
        return NextResponse.json(new APIError("VALIDATION_ERROR", 400, parsed.error.message), { status: 400 })
    }

    try {
        const newDoc = await db.insert(doc).values(parsed.data)
        return NextResponse.json(newDoc.rows[0])
    } catch (error) {
        const cause = inferMessage(error)
        return NextResponse.json(new APIError("UNKNOWN", 500, cause))
    }
}