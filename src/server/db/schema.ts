import { sqliteTable } from "drizzle-orm/sqlite-core";

export const doc = sqliteTable(
  "doc",
  (d) => ({
    id: d.text().primaryKey(), // ULID
    content: d.text().notNull(),
    createdAt: d
      .text()
      .notNull()
  }),
);
