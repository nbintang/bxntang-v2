import getSpotifyEndpoint from "./endpoint";

const getFilteredSpotifyData = async (): Promise<SpotifyDataProps> => {
  const currentlyPlay = await getSpotifyEndpoint("/player/currently-playing");
  const playlist = await getSpotifyEndpoint("/playlists?limit=20&offset=1");
  const followedArtists = await getSpotifyEndpoint("/following?type=artist");

  if (!currentlyPlay.is_playing || !currentlyPlay.item) {
    return {
      nowPlaying: null,
      playlist:playlist?.total, 
      followedArtists: followedArtists.artists.items.length
    };
  }
  const filteredCurrentlyPlay = {
    title: currentlyPlay.item.name,
    image: currentlyPlay.item.album.images[0].url,
    albumName: currentlyPlay.item.album.name,
    isPlayed: currentlyPlay.is_playing,
    type: currentlyPlay.currently_playing_type,
    url: currentlyPlay.item.external_urls.spotify,
    actions: currentlyPlay.actions,
    artists: currentlyPlay.item.album.artists ,
  };
  return {
    nowPlaying: filteredCurrentlyPlay,
    playlist: playlist?.total,
    followedArtists:  followedArtists.artists.items.length,
  };
};

export default getFilteredSpotifyData;
