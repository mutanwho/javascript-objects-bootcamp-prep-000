var playlist = {'artistName': 'songTitle'}

function updatePlaylist(playlist, artistName, songTitle) {
Object.assign({artistName:'songTitle'}, playlist)
return playlist
};
  
function removeFromPlaylist(playlist, artistName){
delete playlist.artistName['artistName']
};