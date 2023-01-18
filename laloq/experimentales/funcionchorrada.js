
function letFrames() {
  let frames = [frame1, frame2, frame3, frame4, frame5];
  let index = 0;
  setInterval(function() {
    console.log(frames[index]);
    index = (index + 1) % frames.length;
  }, 1000);
}