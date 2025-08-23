import { doc } from "@/server/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { APPID_REGEX, createId } from "../ids";
import type { z } from "zod/v4";

export const docInsertSchema = createInsertSchema(doc, {
    id: (schema) => schema
        .regex(APPID_REGEX, { message: "Invalid ID" })
        .default(() => createId()),
    createdAt: (schema) => schema
        .default(() => new Date().toISOString())
})

export const docSelectSchema = createSelectSchema(doc, {
    createdAt: (schema) => schema.transform((str) => new Date(str))
});

export type Doc = z.infer<typeof docSelectSchema>