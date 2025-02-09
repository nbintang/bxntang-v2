export function timeAgo(lastPlayedDateTime: string): string {
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
  