
export const playMusic = () => {
    let audio: HTMLAudioElement | null = document.querySelector('.ims-audio')
    if(audio) {
        audio.muted = false
        if(audio.currentTime || 0 > 0) {
            audio.pause()
            audio.currentTime = 0
        } else {
            audio.play()
        }
    }
}