"use server";

import {
  getProfileFromUserName,
  getRecentlyPlayedGames,
  getTitleTrophies,
  getUserTitles,
  ProfileFromUserNameResponse,
  RecentlyPlayedGame,
  TitleTrophiesResponse,
} from "psn-api";
import getPlaystationToken from "./token";

const user = {
  username: "Ken21Kaneki",
  id: "1556944157329331522",
};

type ProfilePsDataProps = {
  profile: ProfileFromUserNameResponse;
  recent: RecentlyPlayedGame[];
  gameTitles: TitleTrophiesResponse | null;
};

export async function getEndpointPsData(): Promise<ProfilePsDataProps> {
  try {
    const authorization = await getPlaystationToken();
    if (!authorization) throw new Error("Failed to retrieve PlayStation token");

    const profile = await getProfileFromUserName(authorization, user.username);
    const recentlyPlayedGames = await getRecentlyPlayedGames(authorization, {
      limit: 10,
      categories: ["ps4_game"],
    });
    const recentlyPlayedGame = recentlyPlayedGames.data
      .gameLibraryTitlesRetrieve.games as RecentlyPlayedGame[];
    const titles = await getUserTitles(authorization, user.id);
    const findRecentlyPlayedGameTitles = titles.trophyTitles.find(
      (t) =>
        t.trophyTitleName.toLowerCase().trim() ===
        recentlyPlayedGame[0]?.name.toLowerCase().trim()
    );

    const gameTitles = findRecentlyPlayedGameTitles
      ? await getTitleTrophies(
          authorization,
          findRecentlyPlayedGameTitles.npCommunicationId,
          "all",
          {
            npServiceName: findRecentlyPlayedGameTitles.npServiceName,
          }
        )
      : null;

    return {
      profile,
      recent: recentlyPlayedGame,
      gameTitles,
    };
  } catch (error) {
    console.error("Error in getProfilePsData:", error);
    throw error;
  }
}
