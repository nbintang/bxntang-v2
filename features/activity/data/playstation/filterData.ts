import { timeAgo } from "@/helper/formatters";
import { fetchProfilePsData } from ".";

export default async function getFilteredPsData(): Promise<FilteredPSDataProps> {
  try {
    const { profile, gameTitles, recent } = await fetchProfilePsData();
    if (!(profile && gameTitles && recent))
      throw new Error("Failed to fetch data");
    const trophySum = profile?.profile?.trophySummary;
    const totalTrophiesExist = Object.values(
      trophySum?.earnedTrophies ?? {}
    ).reduce((a, b) => a + b, 0);

    const trophies = gameTitles?.trophies.slice(-3).sort((a, b) => {
      const order = {
        platinum: 1,
        gold: 2,
        silver: 3,
        bronze: 4,
      };
      return order[a.trophyType] - order[b.trophyType];
    });
    const isOnline = profile.profile.primaryOnlineStatus === "online";

    const lastPlayedTime = timeAgo(recent[0]?.lastPlayedDateTime || "");
    const gameName = recent[0]?.name;
    const gameImg = recent[0]?.image?.url;
    return {
      trophies,
      totalTrophiesExist,
      isOnline,
      lastPlayedTime,
      gameName,
      gameImg,
      trophySum,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
