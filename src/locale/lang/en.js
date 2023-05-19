export default {
  // Navigation
  nav: {
    home: "Home",
    discover: "Discover",
    discoverChildren: {
      playlists: "Playlists",
      toplists: "Toplists",
      artists: "Artists",
    },
    user: "My",
    userChildren: {
      playlists: "My Playlists",
      like: "Liked Playlists",
      album: "Liked Albums",
      artists: "Liked Artists",
      cloud: "Music Cloud",
      login: "Login",
    },
    avatar: {
      dark: "Dark Mode",
      light: "Light Mode",
      login: "Login",
      logout: "Logout",
      notLogin: "Not logged in",
      notLoginSubtitle: "Log in for full functionality",
      loginError: "Level information retrieval failed",
      history: "Playback History",
      setting: "Global Setting",
      about: "About",
      tip: "Confirm that you are logged out of the current user login ?",
      success: "Log out successfully",
    },
    search: {
      placeholder: "Search music/videos",
      history: "Search History",
      delHistory: "Delete Search History",
      hotList: "Hot Searches",
      searchTip: "Searching...",
      noSuggestions: "No search results",
      songs: "Songs",
      artists: "Artists",
      albums: "Albums",
      playlists: "Playlists",
      tip: "Confirm to delete all search history ?",
    },
  },
  // Home
  home: {
    title: {
      exclusive: "Exclusive Recommend",
      playlists: "Recommended Playlists",
      artists: "Artist Recommend",
      newAlbum: "New Release",
      more: "More",
    },
    modules: {
      dailySongs: {
        title: "Daily Recommend",
        subtitle: "Updated at 6:00 am based on your music preference.",
      },
      radar: {
        title: "Personal Radar",
        subtitle: "Created for you based on your listening history.",
      },
      likeSong: {
        title: "Liked Songs",
        subtitle: "Discover your unique music taste.",
      },
      papersonalfm: {
        title: "Personal FM",
        subtitle: "Offline mode",
      },
    },
  },
  // Menu
  menu: {
    play: "Play now",
    nextPlay: "Play next",
    add: "Add to playlist",
    create: "Create new playlist",
    download: "Download",
    comment: "Comment",
    mv: "Watch MV",
    delete: "Remove from cloud drive",
    deleteQuestion:
      "Confirm to delete song {name} from Cloud Drive? This action cannot be undone!",
    match: "Song Information Match",
    search: "Search for same name",
    copy: "Copy {name} {other}",
    update: "Edit Playlist",
    del: "Delete Playlist",
    delQuestion:
      "Are you sure you want to delete the playlist {name}? This action cannot be undone!",
    unableToDelete: "Default playlist cannot be deleted",
    collection: "Add {name} to Collection",
    cancelCollection: "Remove {name} from Collection",
  },
  // General
  general: {
    type: {
      hot: "Hot",
      all: "All",
      china: "China",
      chinaMale: "China Male",
      chinaFemale: "China Female",
      chinaGroup: "China Group",
      western: "Western",
      westernMale: "Western Male",
      westernFemale: "Western Female",
      westernGroup: "Western Group",
      japan: "Japan",
      japanMale: "Japan Male",
      japanFemale: "Japan Female",
      japanGroup: "Japan Group",
      korea: "Korea",
      koreaMale: "Korea Male",
      koreaFemale: "Korea Female",
      koreaGroup: "Korea Group",
      other: "Other",
      quality: {
        l: "Standard quality",
        m: "Higher quality",
        h: "Very high quality",
        sq: "Lossless",
      },
    },
    name: {
      song: "Song",
      playlist: "Playlist",
      playlists: "Playlists",
      toplists: "Toplists",
      artists: "Artists",
      album: "Album",
      link: "Link",
      cloud: "Cloud",
      songSize: "{size} songs",
      unknownSong: "Unknown Songs",
    },
    dialog: {
      check: "Check",
      cancel: "Cancel",
      success: "Successfully",
      failed: "Failed",
      delete: "Confirm deletion",
      match: "Match",
      create: "Create",
      download: "Downloading",
      downloadingNow: "Downloading now",
      editor: "Editor",
    },
    message: {
      copySuccess: "Copied successfully",
      copyFailure: "Copying failed",
      addSuccess: "Add songs to playlist successfully",
      addFailure: "Failed to add, please try again",
      createSuccess: "Playlist creation success",
      createFailed: "Playlist creation failed, please try again",
      deleteSuccess: "Delete successfully",
      deleteFailure: "Delete failed",
      downloadSuccess: "{name} Download completed",
      downloadFailure: "Download failed, please try another sound quality",
      downloadError: "There was an error downloading, please try again",
      editorSuccess: "Edit successful",
      editorFailed: "Edit failed, Please try again",
      operationFailed: "Operation failed, please try again",
      acquisitionFailed: "Failed to get",
      notSupported: "Your browser does not support this operation",
      jumpOut: "About to jump to off-site links",
      needLogin: "Please login to your account to use",
      needVip: "This operation requires a member account",
      needCheck: "Please check your input",
      isLoading: "Data loading",
    },
  },
  // Other
  other: {
    sData: "Original song information",
    asId: "Matching ID",
    asIdDes: "Please enter the song ID to be matched",
    noNeedMatch: "Consistent with original song ID, no correction required",
    plaseCheck: "Please click to check first",
    matchSuccess: "Song match successfully",
    matchFailed: "Song match failed, please try again",
    matchError: "Unusual song ID, can't match",
    newPlaylistName: "Please enter a new playlist title",
    setPrivacy: "Set as private playlist",
    cloudTip:
      "Currently for the cloud disk songs, downloaded files are the highest sound quality",
    playlistEmpty: "There is no song, please go to the playlist to add",
    plName: "Playlist Name",
    plNameTip: "Please enter the playlist name",
    plDes: "Playlist Description",
    plDesTip: "Please enter the playlist description",
    plTag: "Playlist Tags",
    plTagTip: "Please enter the playlist tags",
  },
};
