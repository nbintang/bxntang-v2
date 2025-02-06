
import { fetchProfilePsData } from "./get-data";


export default async function getFilteredPsData(): Promise<FilteredPSDataProps> {
  const { profile, gameTitles, recent } = await fetchProfilePsData();
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
}

function timeAgo(lastPlayedDateTime: string): string {
  if (!lastPlayedDateTime) {
    console.error("Invalid date string passed to timeAgo:", lastPlayedDateTime);
    return "Unknown time";
  }

  const now = new Date();
  const lastPlayed = new Date(lastPlayedDateTime);
  if (isNaN(lastPlayed.getTime())) {
    console.error("Invalid date string passed to timeAgo:", lastPlayedDateTime);
    return "Unknown time";
  }

  const differenceInMs = now.getTime() - lastPlayed.getTime();
  const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));
  const differenceInHours = Math.floor(differenceInMs / (1000 * 60 * 60));

  if (differenceInMinutes < 1) {
    return "Just now";
  } else if (differenceInMinutes < 60) {
    return differenceInMinutes === 1
      ? "1 minute ago"
      : `${differenceInMinutes} minutes ago`;
  } else if (differenceInHours === 1) {
    return "1 hour ago";
  } else {
    return `${differenceInHours} hours ago`;
  }
}
