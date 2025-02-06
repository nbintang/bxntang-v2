import {
  getSpotifyFollowedArtist,
  getSpotifyNowPlaying,
  getSpotifyPlaylist,
} from "./get-endpoint-data";

const getFilteredSpotifyData = async (): Promise<SpotifyDataProps> => {
  const currentlyPlay = await getSpotifyNowPlaying();
  const playlist = await getSpotifyPlaylist();
  const followedArtists = await getSpotifyFollowedArtist();
  if (!currentlyPlay) {
    return {
      nowPlaying: null,
      playlist: followedArtists.artists.items.length,
      followedArtists: playlist?.total,
    };
  }
  const filteredCurrentlyPlay = {
    title: currentlyPlay.item.name,
    image: currentlyPlay.item.album.images[0].url,
    albumName: currentlyPlay.item.album.name,
    isPlayed: currentlyPlay.is_playing,
    url: currentlyPlay.item.external_urls.spotify,
    actions: currentlyPlay.actions,
    artists: currentlyPlay.item.album.artists || [],
  };
  return {
    nowPlaying: filteredCurrentlyPlay,
    playlist: followedArtists.artists.items.length,
    followedArtists: playlist?.total,
  };
};

export default getFilteredSpotifyData;
