var rkp = {
  init: () => {
    let box = document.querySelector("rk-player");
    let player = document.querySelector("#rkp-audio");
    let bar = document.querySelector('.rkp__progress__bar');
    let time0 = document.querySelector(".rkp__time__0");
    let time1 = document.querySelector(".rkp__time__1");

    box.addEventListener("click", function (e) {
      let t = e.target;
      let state = box.getAttribute("state");
      if (t.matches(".rkp__ctrl__toggle")) {
        switch (state) {
          case "paused":
            player.play();
            box.setAttribute("state", "playing");
            break;
          case "playing":
            player.pause();
            box.setAttribute("state", "paused");
        }
      }
    });

    player.addEventListener("canplay", function () {
      let time = player.duration;
      let mins = ~~(time / 60);
      let secs = ~~(time - mins * 60);
      time1.textContent = `${mins}:${secs < 10 ? '0':''}${secs}`;
      
      bar.setAttribute('min', 0);
      bar.setAttribute('max', time);
    });
    
    player.addEventListener('timeupdate', function() {
      let time = player.currentTime;
      let mins = ~~(time / 60);
      let secs = ~~(time - mins * 60);
      time0.textContent = `${mins}:${secs < 10 ? '0':''}${secs}`;
      bar.value = time;
    });
    
    player.addEventListener('ended', function() {
      box.setAttribute("state", "paused");
      time0.textContent = "0:00"
    });
    
    bar.addEventListener('input', () => {
      player.currentTime = bar.value;
    });
  }
};

rkp.init();

document.querySelector(".rkp__ctrl__toggle").addEventListener("click", function () {
  document.querySelector("#rkp-audio").play();
});