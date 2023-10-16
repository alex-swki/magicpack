import { notFound } from "next/navigation";
import { promises as fs } from "fs";

export async function GET(request: Request) {
  const computersJsonFile = await fs.readFile(process.cwd() + "/computers.json", "utf8");
  const computerJson = JSON.parse(computersJsonFile);
  if (computerJson) return new Response(JSON.stringify(computerJson));

  return notFound();
}
