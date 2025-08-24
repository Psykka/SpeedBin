import { App } from "@/components/app";

const BRANCH = 'refs/heads/main';

async function getReadmeText() {
  const res = await fetch(`https://raw.githubusercontent.com/Psykka/SpeedBin/${BRANCH}/README.md`);

  if (!res.ok) {
    return "";
  }

  return res.text();
}

export default async function HomePage() {
  const readme = await getReadmeText();

  return <App content={readme} />;
}
