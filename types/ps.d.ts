type FilteredPSDataProps = {
    trophies: TitleThinTrophy[] | undefined;
    totalTrophiesExist: number;
    isOnline: boolean;
    lastPlayedTime: string;
    gameName: string | undefined;
    gameImg: string | undefined;
    trophySum: {
      level: number;
      progress: number;
      earnedTrophies: {
        bronze: number;
        silver: number;
        gold: number;
        platinum: number;
      };
    };
  };