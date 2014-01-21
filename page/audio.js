var audioPlayer = document.getElementById('myPlayer');
audioPlayer.play();
audioPlayer.pause();

console.log(audioPlayer.currentTime); // returns 0 since we haven't started playing the audio yet
audioPlayer.currentTime = 10; // move to 10 seconds into the audio
console.log(audioPlayer.currentTime); // returns 10

audioPlayer.play();

setTimeout(function () {
  console.log(audioPlayer.currentTime); // returns 11
}, 1000);