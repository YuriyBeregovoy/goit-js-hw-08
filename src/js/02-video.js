// Ініціалізуємо Vimeo плеєр
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

   const iframe = document.querySelector('#vimeo-player');
   const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

// Відстежуємо подію timeupdate - оновлення часу відтворення

    player.on('timeupdate', throttle(function({seconds}) {
 
      const currentTime = seconds;
    console.log(currentTime + ' секунд');
    localStorage.setItem("videoplayer-current-time", currentTime)
    }), 1000);

    const savedTime = localStorage.getItem("videoplayer-current-time");
    
    player.setCurrentTime(savedTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });

