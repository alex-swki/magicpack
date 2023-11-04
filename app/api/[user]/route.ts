import { notFound } from "next/navigation";
import { promises as fs } from "fs";

var ping = require("ping");

const pingDNS = async function (dns: string) {
  const pingPromise = await ping.promise.probe(dns);
  return {
    isAlive: pingPromise.alive,
    ms: pingPromise.avg,
  };
};

export async function GET(request: Request, { params }: { params: { user: string } }) {
  const user: string = params.user;
  const computersJsonFile = await fs.readFile(process.cwd() + "/computers.json", "utf8");
  const computerJson = JSON.parse(computersJsonFile);

  if (computerJson[user]) {
    const ping = await pingDNS(computerJson[user]["computer"]["dns"]);
    computerJson[user]["computer"]["isAlive"] = ping["isAlive"];
    computerJson[user]["computer"]["ms"] = ping["ms"].split(".")[0];
    if (computerJson[user]["computer"]["ms"] === "unknown") computerJson[user]["computer"]["ms"] = -1;
    return new Response(JSON.stringify(computerJson[user]));
  }

  return notFound();
}
