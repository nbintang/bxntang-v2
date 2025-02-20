
interface SpotifyDataProps {
  nowPlaying: NowPlaying | null;
  playlist: number;
  followedArtists: number;
}

type TypeTrack  = "ad" | "track";
interface NowPlaying {
  title: string;
  image: string;
  albumName: string;
  type: TypeTrack;
  isPlayed: boolean;
  url: string;
  actions: Actions;
  artists: Artist[];
}

interface Actions {
  disallows: Disallows;
}

interface Disallows {
  resuming: boolean;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}
