import { NextResponse } from "next/server";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN!;
const PLAYLIST_ID = process.env.PLAYLIST_ID!;

// Ambil access token dari refresh token
async function getAccessToken(): Promise<string | null> {
  try {
    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", REFRESH_TOKEN);

    const res = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await res.json();
    return data.access_token;
  } catch (err) {
    console.error("Failed to get access token:", err);
    return null;
  }
}

export async function GET() {
  const token = await getAccessToken();
  if (!token) return NextResponse.json({ error: "Failed to get access token" });

  try {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${PLAYLIST_ID}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });

    const data = await res.json();

    if (!data.tracks || !data.tracks.items || data.tracks.items.length === 0) {
      return NextResponse.json({ error: "No tracks found in playlist" });
    }

    // Pilih 1 track acak
    const randomTrack =
      data.tracks.items[Math.floor(Math.random() * data.tracks.items.length)]
        .track;

    return NextResponse.json({
      name: randomTrack.name,
      artists: randomTrack.artists.map((a: any) => a.name),
      albumUrl: randomTrack.album.images[0]?.url || "/offline-placeholder.png",
      spotifyUrl: randomTrack.external_urls.spotify,
    });
  } catch (err) {
    console.error("Failed to fetch playlist:", err);
    return NextResponse.json({ error: "Failed to fetch playlist" });
  }
}
