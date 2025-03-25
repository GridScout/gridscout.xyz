import { NextResponse } from "next/server";
import { REST } from "@discordjs/rest";
import { env } from "~/env";
import { RESTGetCurrentApplicationResult } from "discord-api-types/v10";
export async function GET() {
  try {
    const restClient = new REST({ version: "10" }).setToken(env.BOT_TOKEN);

    const appData = (await restClient.get(
      "/applications/@me",
    )) as RESTGetCurrentApplicationResult;

    const guildCount = appData.approximate_guild_count;

    return NextResponse.json({
      success: true,
      guildCount,
    });
  } catch (error) {
    console.error("Error fetching Discord data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch Discord data" },
      { status: 500 },
    );
  }
}
