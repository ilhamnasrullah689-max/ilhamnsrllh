import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID!;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN!;

  // 1️⃣ Dapat access token
  const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " + Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  });

  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  // 2️⃣ Ambil recently played
  const recentRes = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=5",
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );

  const data = await recentRes.json();
  const tracks = data.items?.map((item: any) => ({
    name: item.track.name,
    artist: item.track.artists.map((a: any) => a.name).join(", "),
    url: item.track.external_urls.spotify,
    thumb: item.track.album.images[0]?.url || "",
  }));

  return NextResponse.json({ tracks });
}
