const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
// Optimizing for smart displays
//const touchControls = cast.framework.ui.Controls.getInstance();
// let playerElement = document.getElementsByTagName("cast-media-player")[0];
// playerElement.style.setProperty('--splash-image', 'url("http://some/other/image.png")');
const musicTrack = cast.framework.messages.MusicTrackMediaMetadata()
musicTrack.albumName = "Classic Radio"


context.start();
