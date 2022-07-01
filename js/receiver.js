const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
// Optimizing for smart displays
//const touchControls = cast.framework.ui.Controls.getInstance();
// let playerElement = document.getElementsByTagName("cast-media-player")[0];
// playerElement.style.setProperty('--splash-image', 'url("http://some/other/image.png")');
playerManager.addEventListener(
  cast.framework.events.EventType.PLAYER_LOAD_COMPLETE, () => {
    const musicTrack = new cast.framework.messages.MusicTrackMediaMetadata()
    musicTrack.albumName = "Classic Radio"
    playerManager.getQueueManager().setContainerMetadata(musicTrack);

})



context.start();
