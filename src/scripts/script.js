(function () {
    const audioBtn = document.getElementsByClassName('js-audio')[0];
    const audioBtnIcon = audioBtn.getElementsByClassName('js-audio-icon')[0]
    const player = document.getElementsByClassName('js-player')[0]
    let isPlayed = false

    audioBtn.addEventListener('click', function () {
        audioBtnIcon.classList.toggle('play_on')

        if (isPlayed) {
            isPlayed = false
            player.pause()
        } else {
            isPlayed = true
            player.play()
        }
    })
})()
