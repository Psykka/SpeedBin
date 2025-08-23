import { sql } from "drizzle-orm";
import { sqliteTable } from "drizzle-orm/sqlite-core";

export const docs = sqliteTable(
  "doc",
  (d) => ({
    id: d.text().primaryKey(), // ULID
    content: d.text().notNull(),
    createdAt: d
      .text()
      .default(sql`(strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))`)
      .notNull()
  }),
);
