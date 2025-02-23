export function timeAgo(
  lastPlayedDateTime: string
): FilteredPSDataProps["lastPlayedTime"] {
  if (!lastPlayedDateTime || isNaN(new Date(lastPlayedDateTime).getTime())) {
    console.error("Invalid date string passed to timeAgo:", lastPlayedDateTime);
    return "Unknown time";
  }

  const now = new Date();
  const lastPlayed = new Date(lastPlayedDateTime);

  const differenceInMs = now.getTime() - lastPlayed.getTime();
  const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60));
  const differenceInHours = Math.floor(differenceInMs / (1000 * 60 * 60));
  const differenceInDays = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

  if(differenceInMinutes < 1) return "Just now";
  if(differenceInMinutes < 60) return `${differenceInMinutes} minute${differenceInMinutes > 1 ? "s" : ""} ago`;
  if(differenceInHours < 24) return `${differenceInHours} hour${differenceInHours > 1 ? "s" : ""} ago`;
  if( differenceInDays< 2) return  "Long time ago";
  
  return `${differenceInDays} day${differenceInDays > 1 ? "s" : ""} ago (${differenceInHours} hours ago)`;
}

export const formatDate = (date: Date | string): string => {
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date as Date);
  return formattedDate;
};
