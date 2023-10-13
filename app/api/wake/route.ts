import { NextResponse } from "next/server";
const wol = require("wol");

export async function PUT(request: Request) {
  const requestBody = await request.json();
  const mac = requestBody["mac"];

  if (mac != "undefined") {
    const wake = await wol.wake(mac, (err: string, res: string) => {
      if (err) return err;
      return res;
    });

    if (wake === true) {
      console.log("Sent magic packet to: " + mac);

      return NextResponse.json({ mac: mac }, { status: 200 });
    }
    return NextResponse.json({ error: wake }, { status: 500 });
  }

  if (mac === "undefined") return NextResponse.json({ error: "Mac adress empty" }, { status: 424 });

  return NextResponse.json({ error: "Unknown" }, { status: 500 });
}
