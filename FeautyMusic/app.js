const startTrack = document.querySelector("#startTrack")
const background = document.querySelector(".background")
let track = document.querySelector("#track")
let trackSrc = '/songs/GetLucky.mp3'
let trackNum = 0

setInterval(backgroundPause, 30100)

let backgroundNum = 0

function backgroundPause() {
    if (backgroundNum == 0) {
        background.pause()
        backgroundNum++
    } else {
        background.play()
        backgroundNum -= 1
    }
}

startTrack.addEventListener('click', function() {
    const srcInp = document.querySelector("#srcTrackInput").value
    if (trackNum == 0) {
        trackSrc = srcInp
        track.setAttribute('src', trackSrc)
        startTrack.textContent = 'Stop'
        trackNum = 1
    } else {
            startTrack.textContent = 'Play'
            track.pause()
            trackNum = 0
    }
})
