import { doc } from "@/server/db/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { createId } from "../ids";

export const docInsertSchema = createInsertSchema(doc, {
    id: (schema) => schema
        .regex(/^[0-9A-Za-z]{5}$/, { message: "Invalid ID" })
        .default(() => createId()),
    createdAt: (schema) => schema
        .default(() => new Date().toISOString())
})

export const docSelectSchema = createSelectSchema(doc);