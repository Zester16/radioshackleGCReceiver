const context = cast.framework.CastReceiverContext.getInstance();
const playerManager = context.getPlayerManager();
// Optimizing for smart displays
//const touchControls = cast.framework.ui.Controls.getInstance();
// let playerElement = document.getElementsByTagName("cast-media-player")[0];
// playerElement.style.setProperty('--splash-image', 'url("http://some/other/image.png")');
playerManager.setMessageInterceptor(
  cast.framework.messages.MessageType.LOAD,
  request => {
    const musicTrack = new cast.framework.messages.MusicTrackMediaMetadata()
    musicTrack.albumName = "Classic Radio"
    musicTrack.title = "Classic Radio"
    musicTrack.images[0] = new cast.framework.messages.Image("https://www.klassikradio.de//_nuxt/img/72ebcae.png")

    request.media.metadata = musicTrack
    return request
  })




context.start();
