import path from "node:path";
import fs from "node:fs";
import { App } from "@/components/app";

async function getReadmeText() {
  const readmePath = path.join(process.cwd(), 'README.md');
  const content = fs.readFileSync(readmePath, 'utf8');
  return content;
}

export default async function HomePage() {
  const readme = await getReadmeText();

  return <App content={readme} />;
}
