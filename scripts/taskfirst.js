var videoPlayer = document.querySelector("#video-player");
var videoPlayBtn = document.querySelector(".play-btn");
var videoPauseBtn = document.querySelector(".pause-btn")
var videoRewindInput = document.querySelector(".rewind-input")
var videoVolumeInput = document.querySelector(".volume-input")
var currentVideoTime = document.querySelector(".current-video-time")
var fullVideoTime = document.querySelector(".full-video-time")
var fullscreenBtn = document.querySelector(".fullscreen")
var prevBtn = document.querySelector(".prev")
var nextBtn = document.querySelector(".next")
var icons = document.querySelector(".icons")
var volumeImage = document.querySelector('#volume-image')
var noVolumeImage = document.querySelector('#no-volume-image')

function videoCurrentPosition() {
    currentVideoTime.textContent = Math.round(videoPlayer.currentTime)
    videoRewindInput.value = videoPlayer.currentTime * 100 / videoPlayer.duration

    var hour = Math.floor(videoPlayer.currentTime / (60 * 60))
    var mins = Math.floor(videoPlayer.currentTime / 60);
    var secs = Math.floor(videoPlayer.currentTime % 60);

    if (hour < 10) {
        hour = '0' + String(hour);
    }
    if (mins > 10) {
        mins = String(mins);
    }
    if (mins > 59) {
        mins = mins - 60
    }
    if (mins < 10) {
        mins = '0' + String(mins);
    }


    if (secs < 10) {
        secs = '0' + String(secs);
    }
    currentVideoTime.innerHTML = `${hour}:${mins}:${secs}`
}

window.addEventListener('load', function () {
    videoPlayer.src = './video/y2mate.com - Boshqalarni muhokama qilmang  Abdukarim Mirzayev_1080p.mp4'
    videoRewindInput.value = 0;
    videoVolumeInput.value = 100
})

volumeImage.addEventListener('click', function () {
    videoPlayer.muted = true;
    videoVolumeInput.value = 0;
    volumeImage.classList.add('none');
    noVolumeImage.classList.remove('none');
   
});

noVolumeImage.addEventListener('click', function () {
    videoPlayer.muted = false;
    videoVolumeInput.value = 100;
    volumeImage.classList.remove('none');
    noVolumeImage.classList.add('none');
});

videoPlayBtn.addEventListener('click', function () {
    if (videoPlayer.paused == false) {
        videoPlayer.pause();
        icons.src = "./images/play.png"

    } else {
        videoPlayer.play();
        icons.src = "./images/pause.png"
    }
    videoCurrentPosition();
    func();

})

setInterval(function () {
    videoCurrentPosition()
}, 1000)

videoRewindInput.addEventListener('change', function () {
    videoPlayer.currentTime = (videoRewindInput.value * videoPlayer.duration) / 100
})

videoVolumeInput.addEventListener('change', function () {
    videoPlayer.volume = videoVolumeInput.value / 100
    volumeInputKorsatrator(videoVolumeInput.value)
})

window.addEventListener("keydown", function (e) {
    if (e.key === " ") {
        if (videoPlayer.paused == false) {
            videoPlayer.pause();
            icons.src = "./images/play.png"
         

        } else {
            videoPlayer.play();
            icons.src = "./images/pause.png"
        }
        func()
    }
})

videoPlayer.addEventListener('click', function () {
    if (videoPlayer.paused == false) {
        videoPlayer.pause();
        icons.src = "./images/play.png"
        // alert('man')

    } else {
        videoPlayer.play(); 
        icons.src = "./images/pause.png"
    }
    func()
})
videoPlayer.addEventListener("dblclick", function (e) {
    videoPlayer.webkitRequestFullScreen();
})

fullscreenBtn.addEventListener("click", function () {
    videoPlayer.webkitRequestFullScreen();
})


prevBtn.addEventListener('click', function () {
    videoPlayer.currentTime = videoPlayer.currentTime - 10
})
nextBtn.addEventListener('click', function () {
    videoPlayer.currentTime = videoPlayer.currentTime + 10
})


function func() {
    fullVideoTime.textContent = Math.round(videoPlayer.duration / 60)
    var hour = Math.floor(videoPlayer.duration / (60 * 60))
    var mins = Math.floor(videoPlayer.duration / 60);
    var secs = Math.floor(videoPlayer.duration % 60);
    if (hour < 10) {
        hour = '0' + String(hour);
    }
    if (mins > 10) {
        mins = String(mins);
    }
    if (mins > 59) {
        mins = mins - 60
    }
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    if (secs < 10) {
        secs = '0' + String(secs);
    }
    fullVideoTime.innerHTML = `${hour}:${mins}:${secs}`
}




function volumeInputKorsatrator(volumePercent) {
    if (volumePercent == 0) {
        volumeImage.src = './images/mute.png'
    } else {
        volumeImage.src = './images/volume.png'
    }
}
document.querySelector('.box').addEventListener('mouseenter',function(){
    videoVolumeInput.classList.toggle('block')
   
})
document.querySelector('.box').addEventListener('mouseleave',function(){
    videoVolumeInput.classList.toggle('block')
  
})
